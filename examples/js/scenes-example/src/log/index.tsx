/* ---------------------------------------------------------------------------------------------
 * Copyright (c) Infiniscene, Inc. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * -------------------------------------------------------------------------------------------- */
import React, { useEffect, useRef, useState } from 'react';

import Typography from '@mui/material/Typography';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import type { } from '@mui/lab/themeAugmentation';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import Accordion from '@mui/material/Accordion';;
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface CodeBlock {
  color: string,
  api: string, sub1: string, sub2: string, clientHeader: string, clientBody: any, serverHeader: string, serverBody: any;
}
type MyCallback = ( chatHistory: CodeBlock[] ) => void;
let gCodeHistory: CodeBlock[] = [];
let gCodeHistoryCb: MyCallback;
export function ApiLogCallback ( api: string, service: string, func: string, request: any, response: any ) {
  let message: CodeBlock = {
    color: 'primary', api: api, sub1: service, sub2: func, clientHeader: func + "Request", clientBody: request,
    serverHeader: func + "Response", serverBody: response
  };
  gCodeHistory.push( message );
  if ( gCodeHistoryCb )
    gCodeHistoryCb( gCodeHistory );
};
export function EventLogCallback ( service: string, type: string, subtype: string, event: any ) {
  let message: CodeBlock = {
    color: 'secondary', api: service, sub1: type, sub2: subtype, clientHeader: undefined, clientBody: undefined,
    serverHeader: "Event", serverBody: event
  };
  gCodeHistory.push( message );
  if ( gCodeHistoryCb )
    gCodeHistoryCb( gCodeHistory );
};


function useCodeHistory ( cb: MyCallback ): void {
  gCodeHistoryCb = cb;
}

const CodeBlock = ( codeString: string ) => {
  return (
    <SyntaxHighlighter language="javascript" style={docco}>
      {codeString}
    </SyntaxHighlighter>
  );
};

export const ApiLogger = () => {
  const [ codeHistory, setCodeHistory ] = useState<CodeBlock[]>( gCodeHistory );
  useEffect( () => {
    return useCodeHistory( ( history ) => {
      setCodeHistory( history );
    }
    );
  }, [ gCodeHistory ] );

  return (
    <Timeline sx={{
      width: '100%',
      bgcolor: 'background.paper',
      position: 'relative',
      overflow: 'auto',
      maxHeight: 300,
      '& ul': { padding: 0 },
    }}>

      {codeHistory.map( ( codeBlock, i ) => {
        return <div><TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            <Typography variant="h6" component="span">
              {codeBlock.api}
            </Typography>
            <Typography>{codeBlock.sub1}</Typography>
            <Typography>{codeBlock.sub2}</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />

            <TimelineDot color={codeBlock.color} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>

            {( codeBlock.clientBody != undefined ) ? (
              <Accordion expanded={true}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{codeBlock.clientHeader}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {CodeBlock( JSON.stringify( codeBlock.clientBody, null, 2 ) )}
                </AccordionDetails>
              </Accordion>
            ) : null}

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{codeBlock.serverHeader}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {CodeBlock( JSON.stringify( codeBlock.serverBody, null, 2 ) )}
              </AccordionDetails>
            </Accordion>


          </TimelineContent>
        </TimelineItem> );
        </div>;
      } )}


    </Timeline>
  );
};