import React from 'react';
import members from '../components/data/teamData.js';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

function Team() {
return (
<View style={styles.team}>
    <Text style={styles.title}>Our Team</Text>

    <ScrollView 
    contentContainerStyle={styles.teamContainer}
    showsVerticalScrollIndicator={false}
    >
    {members.map((member) => (
        <View style={styles.teamMember} key={member.name}>
        <Image 
            source={ member.avatar } 
            style={styles.avatar} 
            resizeMode="cover"
        />
        <Text style={styles.memberName}>{member.name}</Text>
        <Text style={styles.memberDetails}>
            <Text style={styles.bold}>Skills:</Text> {member.skills}
        </Text>
        <Text style={styles.memberDetails}>
            <Text style={styles.bold}>Interest:</Text> {member.interest}
        </Text>
        </View>
    ))}
    </ScrollView>
</View>
);
}

const styles = StyleSheet.create({
  team: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  teamContainer: {
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  teamMember: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 10,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  memberName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  memberDetails: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 5,
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default Team;