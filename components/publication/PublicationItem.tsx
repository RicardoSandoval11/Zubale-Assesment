import { formatDate, generateLikesMessage } from '@/helpers';
import { Publication } from '@/types';
import { FontAwesome } from '@expo/vector-icons';
import { Image } from 'expo-image';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type PublicationProps = {
    publication: Publication
};

export const PublicationItem: React.FC<PublicationProps> = ({publication}) => {
    const { 
        avatar, 
        createdAt, 
        name, 
        description, 
        likes, 
        image, 
        comments, 
        liked, 
        saved, 
        location, 
        id 
    } = publication;
    const [isLiked, setIsLiked] = useState<boolean>(liked);
    const [isSaved, setIsSaved] = useState<boolean>(saved);
    const [failedFetchAvatar, setFailedFetchAvatar] = useState<boolean>(false);
    const [failedFetchImage, setFailedFetchImage] = useState<boolean>(false); 

    const fallBackImage = require('@/assets/images/sample-publication.png');
    const fallBackAvatar = require('@/assets/images/avatar-pub.png');

    return (
        <View style={{marginBottom: 20}}>
            <View style={styles.headerContainer}>
                <View style={styles.userInfoContainer}>
                    <Image 
                        source={failedFetchAvatar ? fallBackAvatar : {uri: avatar}}
                        onError={() => setFailedFetchAvatar(true)}
                        style={{
                            width: 32,
                            height: 32,
                            borderRadius: '100%'
                        }}
                    />
                    <View style={{
                        marginLeft: 10
                    }}>
                        <View>
                            <Text style={styles.username}>{name}</Text>
                        </View>
                        <View>
                            <Text style={styles.location}>{location}</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <Image 
                        source={require('@/assets/images/options.png')}
                    />
                </View>
            </View>
            <View>
                <Image 
                    source={failedFetchImage ? fallBackImage : { uri: image }}
                    onError={() => setFailedFetchImage(true)}
                    style={{
                        width: 'auto',
                        height: 375,
                    }}
                />
            </View>
            <View style={styles.actionsContainer}>
                <View style={styles.actionsLeft}>
                    <Pressable
                        onPress={() => setIsLiked(prev => !prev)}
                        style={styles.speacialButton}
                    >
                        <FontAwesome
                            name={isLiked ? 'heart' : 'heart-o'}
                            size={32}
                            color={isLiked ? 'red' : 'black'}
                        />
                        <Text style={{fontWeight: 700}}>{isLiked ? likes + 1 : likes}</Text>
                    </Pressable>
                    <View style={styles.speacialButton}>
                        <Image 
                            source={require('@/assets/images/comment-icon.png')}
                            style={{
                                width: 30,
                                height: 30
                            }}
                        />
                        <Text style={{fontWeight: 700}}>{comments}</Text>
                    </View>
                    <Image 
                        source={require('@/assets/images/message.png')}
                        style={{
                            width: 32,
                            height: 28,
                            marginTop: 5
                        }}
                    />
                </View>
                <View>
                    <Pressable
                        onPress={() => setIsSaved((prev) => !prev)}
                    >
                        <FontAwesome
                            name={isSaved ? 'bookmark' : 'bookmark-o'}
                            size={32}
                            color={isSaved ? 'black' : 'black'}
                        />
                    </Pressable>
                </View>
            </View>
            <View style={styles.likesContainer}>
                <Text style={styles.likesText}>
                    {generateLikesMessage(isLiked, likes)}
                </Text>
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.username}>{name} </Text>
                <Text>{description}</Text>
            </View>
            <View style={styles.dateContainer}>
                <Text style={styles.date}>{formatDate(createdAt)}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 15
    },
    userInfoContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    infoContainer: {
        marginLeft: 12
    },
    username: {
        fontWeight: 600
    },
    location: {
        fontSize: 12
    },
    actionsContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: 15,
        flexDirection: 'row',
        alignContent: 'center'
    },
    actionsLeft: {
        display: 'flex',
        flexDirection: 'row',
        width: 200,
        justifyContent: 'space-between',
        alignContent: 'center'
    },
    likesContainer: {
        paddingLeft: 15,
        paddingRight: 15,
        marginTop: 3,
        marginBottom: 6
    },
    likesText: {
        fontWeight: 500
    },
    descriptionContainer: {
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: 15,
        paddingRight: 15,
    },
    speacialButton: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: 80,
        justifyContent: 'space-between'
    },
    dateContainer: {
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: 15,
        paddingRight: 15,
        marginTop: 5,
    },
    date: {
        fontSize: 12
    }
})