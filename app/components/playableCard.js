import React, { Component } from 'react';
import { View, Text, Button, ScrollView, TouchableHighlight, Modal, StyleSheet, Image} from 'react-native';

// import Card from './Card/Card';

//Cards
import Atonement, {atonementId} from './Cards/atonement';
import Blessing, {blessingId} from './Cards/blessing';
import AngelOfDeath, {angelofdeathId} from './Cards/angelofdeath';
import StormFall, {stormfallId} from './Cards/stormfall';
import AeolianDance, {aeoliandanceId} from './Cards/aeoliandance';
import Holmgang, {holmgangId} from './Cards/holmgang';
import Bloodmage, {bloodmageId} from './Cards/bloodmage';
import Archdaemon, {archdaemonId} from './Cards/archdaemon';
import LegionArcher, {legionarcherId} from './Cards/legionarcher';
import Edgedancer, {edgedancerId} from './Cards/edgedancer';
import Legionnaire, {legionnaireId} from './Cards/legionnaire';
import Dreadnaught, {dreadnaughtId} from './Cards/dreadnaught';
import Titanus, {titanusId} from './Cards/titanus';
import Katalies, {kataliesId} from './Cards/katalies';
import WaterlightCityPrincess, {waterlightcityprincessId} from './Cards/waterlightcityprincess';
import Ghostblade, {ghostbladeId} from './Cards/ghostblade';
import Valkyria, {valkyriaId} from './Cards/valkyria';
import Centurion, {centurionId} from './Cards/centurion';
import Berserker, {berserkerId} from './Cards/berserker';
import IcePrincess, {iceprincessId} from './Cards/iceprincess';
import Lenia, {leniaId} from './Cards/lenia';

const Deck = [
    <Atonement key="atonementId"/>, 
    <Blessing key="blessingId"/>, 
    <AngelOfDeath key="angelofdeathId"/>, 
    <StormFall key="stormfallId"/>, 
    <AeolianDance key="aeoliandanceId"/>, 
    <Holmgang key="holmgangId"/>,
    <Bloodmage key="bloodmageId"/>,
    <Archdaemon key="archdaemonId"/>,
    <LegionArcher key="legionarcherId"/>,
    <Edgedancer key="edgedancerId"/>,
    <Legionnaire key="legionnaireId"/>,
    <Dreadnaught key="dreadnaughtId"/>,
    <Titanus key="titanusId"/>,
    <Katalies key="kataliesId"/>,
    <WaterlightCityPrincess key="waterlightcityprincessId"/>,
    <Ghostblade key="ghostbladeId"/>,
    <Valkyria key="valkyriaId"/>,
    <Centurion key="centurionId"/>,
    <Berserker key="berserkerId"/>,
    <IcePrincess key ="iceprincessId"/>,
    <Lenia key="leniaId"/>
    ];


var styles = StyleSheet.create({
  container: {
    flex: 1,
    // remove width and height to override fixed static size
    width: null,
    height: null,
  }
})

class PlayableCard extends Component {
    constructor(props) {
        super(props);
        this.getRandomList = this.getRandomList.bind(this);
    }

    getRandomList () {
        let currentHand = [];
        for(var i = 0; i < 3; i++) {
            currentHand.push(Deck[Math.floor(Math.random() * 21)])
        }
        return currentHand;
    }

    render() {

        return (
            <View style={{backgroundColor: 'blue'}}>
                <ScrollView horizontal={true}>
                    {this.getRandomList()}
                </ScrollView>
            </View>
        );
    }
}

export default PlayableCard;