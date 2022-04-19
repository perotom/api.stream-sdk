/* ---------------------------------------------------------------------------------------------
 * Copyright (c) Infiniscene, Inc. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * -------------------------------------------------------------------------------------------- */
/**
 * Wrap class property with error handler.
 * 
 * This decorator wraps a given class property, informing the consumer why this property isn't set. It provides
 * a slightly cleaner user experience than making every property optional.
 */
export function RequiresSdkAuthentication () {
  return function ( target: Object, propertyKey: string ) {
    let value: any;

    Object.defineProperty( target, propertyKey, {
      get: () => {
        if ( !value ) {
          throw new Error( 'Please authenticate ApiStream by calling apiStream.load( accessToken )' );
        }
        return value;
      },
      set: val => {
        value = val;
      },
    } );
  };
}
