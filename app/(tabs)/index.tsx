import { Header, PublicationItem, StoriesBar } from '@/components';
import { Stories } from '@/constants';
import { usePublications } from '@/hooks';
import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const [loadingStories, setIsLoadingStories] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState(false); 

  const { 
    currentPublications, 
    error, 
    loading, 
    page, 
    totalPages, 
    onGetAllPublications, 
    onPageChange, 
    onPaginatePublications,
    onResetState
  } = usePublications();

  const handleLoadMore = () => {
    if (page + 1 < totalPages && !loading) {
      onPageChange();                
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);    
    onResetState();          
    await onGetAllPublications();     
    setRefreshing(false);            
  };

  useEffect(() => {
    onPaginatePublications(page);
  }, [page]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoadingStories(false);
    }, 700);

    onGetAllPublications();

    return () => {
      clearTimeout(timeoutId);
    }
  }, []);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header />
      <StoriesBar stories={Stories} isLoading={loadingStories}/>
      {
        error ?
          <View style={styles.errorContainer}>
            <View style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              height: 80
            }}>
              <Text style={{fontWeight: 600}}>{error}</Text>
            </View>
            <View>
              <Pressable 
                onPress={handleRefresh}
                style={{
                  backgroundColor: '#3897F0',
                  padding: 10,
                  borderRadius: 15,
                }}
              >
                <Text style={{color: 'white', fontWeight: 500}}>Try Again</Text>
              </Pressable>
            </View>
          </View>
        :
          <FlatList
            data={currentPublications}
            keyExtractor={(item, index) => `publication-${index}`}
            renderItem={({ item }) => <PublicationItem publication={item} />}
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0.5}
            ListFooterComponent={
              loading ? (
                <View style={styles.footer}>
                  <ActivityIndicator size="small" color="gray" />
                </View>
              ) : null
            }
            refreshing={refreshing}          
            onRefresh={handleRefresh}        
          />
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white'
  },
  footer: {
    paddingVertical: 16,
  },
  errorContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: '100%',
    width: '100%',
    flexWrap: 'wrap'
  }
});
