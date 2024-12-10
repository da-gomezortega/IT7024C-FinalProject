import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // Global styles
  container: {
    flex: 1,
    backgroundColor: '#f9fafc',
  },
  text: {
    color: '#333',
    lineHeight: 24,
    fontFamily: 'Roboto_400Regular',
    fontSize: 16
  },

  // Navbar styles
  navbar: {
    backgroundColor: '#0D1B2A',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 99999,
  },
  logo: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  navLink: {
    color: 'white',
    textDecorationLine: 'none',
    paddingVertical: 14,
    paddingHorizontal: 20,
  },
  // Hamburger menu
  activeMenu: {
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    top: 50,
    right: 0,
    backgroundColor: '#0D1B2A',
  },
  hiddenMenu: {
    display: 'none', // Hide menu links when hamburger is not active
  },
  hamburger: {
    display: 'block',
    cursor: 'pointer',
  },
  hamburgerText: {
    fontSize: 30,
    color: 'white',
    marginRight: 10,
  },

  // Responsive navbar
  navLinksResponsive: {
    flexDirection: 'column',
    width: '100%',
    display: 'none', // Change dynamically
    position: 'absolute',
    top: 100,
    left: 0,
    backgroundColor: '#0D1B2A',
  },
  navLinksResponsiveActive: {
    display: 'flex',
  },

  // Text styles
  heading1: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 32,
    letterSpacing: 1,
    fontWeight: '700',
    borderBottomWidth: 2,
    borderBottomColor: '#00A8E8',
    paddingBottom: 5,
    marginBottom: 20
  },
  heading3: {
    fontSize: 27,
    color: '#00A8E8',
  },

  // Button styles
  customButton: {
    backgroundColor: '#00A8E8',
    color: '#f9fafc',
    borderWidth: 2,
    borderColor: 'transparent',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    fontFamily: 'Roboto_700Bold',
  },
  customButtonHover: {
    backgroundColor: '#0D1B2A',
    color: '#00A8E8',
  },

  // Section styles
  section: {
    padding: 40,
    marginVertical: 30,
    marginHorizontal: 'auto',
    maxWidth: 900,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: 'rgba(0,0,0,0.1)',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 30
  },
  sectionHover: {
    transform: [{ translateY: -5 }],
  },
  sectionImage: {
    maxWidth: 400,
    maxHeight: 224,
    borderRadius: 8,
  },

  // About section
  aboutUs: {
    textAlign: 'center',
  },
  about: {
    maxWidth: 800,
    marginHorizontal: 'auto',
    padding: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#ffffff',
  },

  // Team and project cards
  teamMember: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    width: 250,
    textAlign: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 8,
  },
  teamMemberHover: {
    transform: [{ translateY: -5 }],
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
  },
  teamMemberImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    borderWidth: 3,
    borderColor: '#bdc3c7',
  },
  teamMemberImageHover: {
    borderColor: '#2980b9',
  },
  teamMemberText: {
    margin: 5,
    fontSize: 14,
    color: '#666',
  },
  teamMemberStrong: {
    color: '#2980b9',
    fontWeight: '600',
  },

  // Footer
  footer: {
    textAlign: 'center',
    padding: 20,
    backgroundColor: '#0D1B2A',
    color: 'white',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 60,
  },
  footerText: {
    fontFamily: 'Poppins_400Regular',
    fontWeight: '400',
  },
});

export default styles;