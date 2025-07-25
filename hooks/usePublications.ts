import { publicationsService } from "@/services";
import { Publication } from "@/types";
import { useState } from "react";

const PAGE_SIZE = Number.isNaN(Number(process.env.EXPO_PUBLIC_PAGE_SIZE)) 
                            ? 20 
                            : Number(process.env.EXPO_PUBLIC_PAGE_SIZE); 


export const usePublications = () => {
    const [publications, setPublications] = useState<Publication[]>([]);
    const [currentPublications, setCurrentPublications] = useState<Publication[]>([]);
    const [error, setError] = useState<string | undefined>();
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const { getAllPublications } = publicationsService();

    const computePages = (totalRecords: number) => {
        const total = Math.ceil(totalRecords / PAGE_SIZE);
        setTotalPages(total);
    }

    const onGetAllPublications = async () => {
        const result = await getAllPublications();
        if (typeof result === 'string'){
            setError(result);
            setLoading(false);
            return;
        }
        setPublications(result);
        computePages(result.length);
        onPaginatePublications(0); // Set first page;
        setLoading(false);
    }

    const onPaginatePublications = (page: number) => {
        const pagePublications: Publication[] = 
                        publications.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);
        setCurrentPublications((prev) => {
            return [
                ...prev,
                ...pagePublications
            ]
        });
    };

    const onPageChange = () => {
        setPage((prev) => prev + 1);
    }

    const onResetState = () => {
        setPublications([]);
        setCurrentPublications([]);
        setTotalPages(0);
        setPage(0);
        setLoading(true);
        setError(undefined);
    }

    return {
        currentPublications,
        error,
        loading,
        page,
        totalPages,
        onGetAllPublications,
        onPaginatePublications,
        onPageChange,
        onResetState,
    }
}