import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';

export const Header = () => {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.cameraIconContainer}>
                <Image 
                    source={require('@/assets/images/camera.png')}
                    style={{
                        width: 24,
                        height: 22,
                    }}
                />
            </View>
            <View style={styles.instagramLogoContainer}>
                <Image
                    source={require('@/assets/images/instagram-logo.png')}
                    style={{
                        width: 105,
                        height: 28
                    }}
                />
            </View>
            <View style={styles.otherIconsContainer}>
                <Image 
                source={require('@/assets/images/stream.png')}
                style={{
                    width: 24,
                    height: 25
                }}
            />
            <Image 
                source={require('@/assets/images/message.png')}
                style={{
                    width: 23,
                    height: 20
                }}
            />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
        padding: 15,
    },
    cameraIconContainer: {
        width: 24,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    instagramLogoContainer: {
        width: 200,
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        alignContent: 'center',
    },
    otherIconsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'nowrap',
        width: 70,
        alignItems: 'center'
    }
});