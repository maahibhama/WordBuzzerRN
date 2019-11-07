import React from 'react';
import {Modal, View, Text} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import WordButton from '../WordButton';

export default function WordPopView(props) {
  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={props.showAlert}
      onRequestClose={() => {
        console.log('Modal closed');
      }}>
      <View style={styles.modalBackground}>
        <View style={styles.alertViewWrapper}>
          <Text style={styles.numberOfWordText}>
            {'Number of Words: ' +
              props.noOfAnswers +
              '/' +
              props.totalNoOfQuestion}
          </Text>
          <View style={styles.qaContainer}>
            <Text style={styles.baseQAText}>{'Q. '}</Text>
            <Text style={styles.questionText}>{props.englishWord}</Text>
          </View>
          <View style={styles.qaContainer}>
            <Text style={styles.baseQAText}>{'A. '}</Text>
            <Text style={styles.answerText}>{props.spanishWord}</Text>
          </View>
          <WordButton
            title={'Next Word'}
            styles={styles.startButton}
            textStyles={styles.startButtonText}
            onTouch={props.onTouch}
          />
        </View>
      </View>
    </Modal>
  );
}

WordPopView.propTypes = {
  showAlert: PropTypes.bool,
  noOfAnswers: PropTypes.number,
  totalNoOfQuestion: PropTypes.number,
  onTouch: PropTypes.func,
  englishWord: PropTypes.string,
  spanishWord: PropTypes.string,
};

WordPopView.defaultProps = {
  showAlert: true,
  noOfAnswers: 0,
  totalNoOfQuestion: 0,
  onTouch: () => {},
  englishWord: '',
  spanishWord: '',
};
