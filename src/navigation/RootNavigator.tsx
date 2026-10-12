
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import SkillsScreen from './screens/SkillsScreen';
import ProjectsScreen from './screens/ProjectsScreen';
import ProfileScreen from './screens/ProfileScreen';
import AboutScreen from './screens/AboutScreen';
import ProjectDetailsScreen from './screens/ProjectDetailsScreen';


export type Project = {
  id: string;
  title: string;
  problem: string;
  contribution: string;
  technology: string[];
};

export type ProjectsStackParamList = {
  ProjectsList: undefined;
  ProjectDetails: { project: Project };
};

export type TabParamList = {
  Home: undefined;
  Skills: undefined;
  Projects: undefined;
  Profile: undefined;
  About: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();
const ProjectsStack =
  createNativeStackNavigator<ProjectsStackParamList>();

function ProjectsNavigator() {
  return (
    <ProjectsStack.Navigator>
      <ProjectsStack.Screen
        name="ProjectsList"
        component={ProjectsScreen}
        options={{ title: 'My Projects' }}
      />
      <ProjectsStack.Screen
        name="ProjectDetails"
        component={ProjectDetailsScreen}
        options={{ title: 'Project Details' }}
      />
    </ProjectsStack.Navigator>
  );
}

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#14213D' },
          headerTintColor: '#FFFFFF',
          tabBarActiveTintColor: '#2563EB',
          tabBarInactiveTintColor: '#64748B',
          tabBarLabelStyle: { fontSize: 11 },
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Skills" component={SkillsScreen} />
        <Tab.Screen
          name="Projects"
          component={ProjectsNavigator}
          options={{ headerShown: false }}
        />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
