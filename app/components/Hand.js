import React, { Component } from 'react';
import { View, Text, Button, ScrollView, TouchableHighlight, Modal } from 'react-native';

// import Card from './Card/Card';

//Cards
import Atonement from './Cards/atonement';
import Blessing from './Cards/blessing';
import AngelOfDeath from './Cards/angelofdeath';
import StormFall from './Cards/stormfall';
import AeolianDance from './Cards/aeoliandance';
import Holmgang from './Cards/holmgang';
import Bloodmage from './Cards/bloodmage';
import Archdaemon from './Cards/archdaemon';
import LegionArcher from './Cards/legionarcher';
import Edgedancer from './Cards/edgedancer';
import Legionnaire from './Cards/legionnaire';
import Dreadnaught from './Cards/dreadnaught';
import Titanus from './Cards/titanus';
import Katalies from './Cards/katalies';
import WaterlightCityPrincess from './Cards/waterlightcityprincess';
import Ghostblade from './Cards/ghostblade';
import Valkyria from './Cards/valkyria';
import Centurion from './Cards/centurion';
import Berserker from './Cards/berserker';
import IcePrincess from './Cards/iceprincess';
import Lenia from './Cards/lenia';
    
class Hand extends Component {

    render() {
        return (
            <View>
                <ScrollView horizontal={true}>
                    <Atonement />
                    <Blessing />
                    <AngelOfDeath />
                    <StormFall />
                    <AeolianDance />
                    <Holmgang />
                    <Bloodmage />
                    <Archdaemon />
                    <LegionArcher />
                    <Edgedancer />
                    <Legionnaire />
                    <Dreadnaught />
                    <Titanus />
                    <Katalies />
                    <WaterlightCityPrincess />
                    <Ghostblade />
                    <Valkyria />
                    <Centurion />
                    <Berserker />
                    <IcePrincess />
                    <Lenia />
                </ScrollView>
            </View>
        );
    }
}



export default Hand;