/* ---------------------------------------------------------------------------------------------
 * Copyright (c) Infiniscene, Inc. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * -------------------------------------------------------------------------------------------- */
import { LogLevel } from 'typescript-logging';
import { CategoryProvider } from 'typescript-logging-category-style';

// Optionally change default settings, in this example set default logging to Info.
// Without changing configuration, categories will log to Error.
export const logger = CategoryProvider.createProvider( "ApiStream", { allowSameCategoryName: true, level: LogLevel.Warn } );
