import React, { Component } from 'react';
import { Card } from 'react-native-elements';
import { Text, ScrollView } from 'react-native';


function RenderAddressCard() {
    return (
        <Card
            wrapperStyle={{ margin: 20 }}
            title="Contact Information">
            <Text>1 Nucamp Way</Text>
            <Text>Seattle, WA 98001</Text>
            <Text style={{ marginBottom: 10 }}>U.S.A.</Text>
            <Text>Phone: 1-206-555-1234</Text>
            <Text>Email: campsites@nucamp.co</Text>
        </Card>
    )
}

class Contact extends Component {
    constructor(props) {
        super(props);
    };

    static navigationOptions = {
        title: 'Contact Us'
    }

    render() {
        return (
            <ScrollView>
                <RenderAddressCard />
            </ScrollView>
        );
    }
}

export default Contact;