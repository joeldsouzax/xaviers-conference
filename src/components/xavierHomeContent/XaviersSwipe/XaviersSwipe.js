/**
 * XaviersSwipe.js
 * This had better be a single object written in JavaScript, if you like your job.
 * Polluting the global space with objects is not good citizenship.
 * Have a nice day.
 * -- Management
 *
 *
 *
 * @version 0.1
 * @author  joel
 * @updated 22/07/2018
 * @project xaviers-conference
 *
 *
 *
 */


import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = {
    root: {
        position: 'relative',
    },
    slide: {
        minHeight: 400,
        color: '#fff',
    },
    slide1: {
        backgroundColor: '#FEA900',
    },
    slide2: {
        backgroundColor: '#B3DC4A',
    },
    slide3: {
        backgroundColor: '#6AC0FF',
    },
};


class XaviersSwipe extends React.Component {

    state = {
        index: 0,
    };

    handleChangeIndex = index => {
        this.setState({
            index,
        });
    };


    render() {

        const { index } = this.state;

        return (
                <div style={styles.root}>
                    <AutoPlaySwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
                        <div style={Object.assign({}, styles.slide, styles.slide1)}>slide n°1</div>
                        <div style={Object.assign({}, styles.slide, styles.slide2)}>slide n°2</div>
                        <div style={Object.assign({}, styles.slide, styles.slide3)}>slide n°3</div>
                    </AutoPlaySwipeableViews>
                </div>
        );
    }

}

export default XaviersSwipe;