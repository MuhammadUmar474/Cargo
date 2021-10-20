import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import styles from './Styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import StarRating from 'react-native-star-rating';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const RateandReview = () => {

    const [ userRating, setUserRating ] = useState(4);
    const [ defaultRating, setDefaultRating ] = useState(4);
    const [ description, setDescription ] = useState();
 
  const handleChange = (value) => {
    setDefaultRating(value);
  }

    return (
        <View style={styles.container}>
            <View style={styles.topView}>
                <Text style={styles.rateTxt}>RATE AND REVIEW</Text>
                <TouchableOpacity style={styles.backBtn}>
                    <FontAwesome name={"times"} size={20} style={{ color: "#FFFFFF", alignSelf: 'flex-end'}}/>
                </TouchableOpacity>
            </View>

            <ScrollView>
            <View style={styles.underTopView}>
                <View style={{marginTop: hp('5%'), flexDirection: 'row'}}>
                <Image source={require('../../assets/images/Group.png')} style={styles.imageStyle}/>
                <View style={{marginLeft: wp('3%')}}>
                    <Text style={styles.nametxt}>Azar Nemanli</Text>
                    <View style ={styles.starContainer}>
                    <StarRating
                        fullStarColor={'#FF8137'}
                        emptyStarColor={'#F5F5F5'}
                        disabled={false}
                        maxStars={5}
                        starSize={15}
                        rating={defaultRating}
                        selectedStar={(rating) => handleChange(rating)}
                        starStyle={{marginHorizontal: wp('0.5%')}}
                    />
                    <Text style = {{marginTop: -2, fontSize: 12}}> (5.0)</Text>
                    </View>
                </View>
                </View>

                <View style={{marginTop: hp('5%')}}>
                    <Text style={styles.rateView}>Please Rate Your Customer</Text>
                    <View style ={styles.starContainer1}>
                    <StarRating
                        fullStarColor={'#FF8137'}
                        emptyStarColor={'#F5F5F5'}
                        disabled={false}
                        maxStars={5}
                        starSize={25}
                        rating={defaultRating}
                        selectedStar={(rating) => handleChange(rating)}
                        starStyle={{marginHorizontal: wp('1%')}}
                    />
                    </View>
                </View>
                <View>
                <Text style={styles.experienceTxt}>Describe Your Experience</Text>
                <View style={styles.descriptionView}>
                <TextInput
                placeholder=""
                value={description}
                onChange={setDescription}/>
                </View>

                <TouchableOpacity style={styles.buttonSubmit} >
                    <Text style={styles.submitBtnTxt}>SUBMIT</Text>
                </TouchableOpacity>
                </View>
            </View>
            </ScrollView>
        </View>
    )
}

export default RateandReview;
