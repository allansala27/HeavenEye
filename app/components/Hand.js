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

var styles = StyleSheet.create({
  container: {
    flex: 1,
    // remove width and height to override fixed static size
    width: null,
    height: null,
  }
})

class Hand extends Component {
    constructor(props) {
        super(props);

        this.getRandomList = this.getRandomList.bind(this);
    }

    getRandomList () {
    return [<Atonement key="{atonementId}"/>, <Blessing key="blessingId"/>, <AngelOfDeath key="angelofdeathId"/>, <StormFall key="{stormfallId}"/>, <AeolianDance key="aeoliandanceId"/>, <Holmgang key="holmgangId"/> ];

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

export default Hand;