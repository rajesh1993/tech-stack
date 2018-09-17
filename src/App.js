import React, { Component } from 'react';
import { View, Platform, UIManager } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import LibraryList from './components/LibraryList';

class App extends Component {
	constructor() {
		super();

		if (Platform.OS === 'android') {
			UIManager.setLayoutAnimationEnabledExperimental(true);
		}
	}

	render() {
		return (
			<Provider store={createStore(reducers)}>
				<View style={{ flex: 1 }}>
					<Header headerText='Tech Stack' />
					<LibraryList />
				</View>
			</Provider>
		);
	}
}

export default App;
