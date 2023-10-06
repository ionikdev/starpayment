import React, { useEffect, useState } from "react";
import { Redirect, useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loading from "../utils/Loading";

const AuthHandler = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = await AsyncStorage.getItem("ACCESS_TOKEN");
        if (token) {
          setIsAuthenticated(true);
        }
      } catch (e) {
        // Handle error, e.g., logging
      }
      setIsLoading(false);
    };

    checkToken();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      // Once loading is complete, perform navigation
      if (isAuthenticated) {
        // Navigate to dashboard if authenticated
        router.push("/dashboard");
      } else {
        // Navigate to welcome screen if not authenticated
        router.push("/welcome-screen");
      }
    }
  }, [isLoading, isAuthenticated, router]);

  if (isLoading) {
    return <Loading />;
  }

  // Return null or an empty component here
  return null;
};

export default AuthHandler;
