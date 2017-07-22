import React, { Component } from 'react';
import { View, Text, Button, ScrollView, TouchableHighlight, Modal, StyleSheet, Image} from 'react-native';
import styles from './styles';

//Cards
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

class PlayableCard extends Component {
    constructor(props) {
        super(props);
        this.getRandomList = this.getRandomList.bind(this);
        this.state = {
            
        }
    }

    shuffleArray(deck) {
        var currentIndex = deck.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = deck[currentIndex];
            deck[currentIndex] = deck[randomIndex];
            deck[randomIndex] = temporaryValue;
        }

    return deck;
    }

    getRandomList () {
        let shuffledDeck = this.shuffleArray(Deck)
        let randomHand = [];
        for (var i = 0; i < 3; i++) {
            randomHand.push(Deck[i])
        }
        return randomHand;
    }

    render() {
        const currentHand = this.getRandomList();
        return (
            <Image style={styles.content}>
                <ScrollView horizontal={true}>
                    {currentHand.map((card) => {
                        return (
                            React.cloneElement( card , {chosenValue: this.props.chooseValue} )
                        )
                    })}
                </ScrollView>
            </Image>
        );
    }
}


export default PlayableCard;