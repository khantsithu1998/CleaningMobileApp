import React, { useEffect, useState } from 'react';
import NetInfo from '@react-native-community/netinfo';

import { useSetAtom } from 'jotai';
import { netAtom } from 'utils/store';

const withNetworkSubscription = (WrappedComponent : any) => {
  const WithNetworkSubscription = (props : any) => {
    const setNet = useSetAtom(netAtom)

    useEffect(() => {
      NetInfo.configure({
        reachabilityUrl: 'https://apps.apple.com',
        reachabilityTest: async (response : any) => response.status == 200,
      });
      
      const unsubscribe = NetInfo.addEventListener((state : any) => {
        if (state.isConnected) {
          setNet(true);
        } else {
          setNet(false);
        }
      });

      return () => {
        unsubscribe();
      };
    }, []);

    return <WrappedComponent {...props} />;
  };

  return WithNetworkSubscription;
};

export default withNetworkSubscription;
