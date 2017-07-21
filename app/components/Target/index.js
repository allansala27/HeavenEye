import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import styles from './styles';

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

export default class Target extends Component {
	constructor(props) {
        super(props);
        this.chooseTarget = this.chooseTarget.bind(this);
    }

    chooseTarget () {
        let currentCard = Deck[Math.floor(Math.random() * 15)]
        return currentCard;
    }

	render(){
		return(
			<View style={styles.content}>
				{this.chooseTarget()}
			</View>	
		);
	}
}
