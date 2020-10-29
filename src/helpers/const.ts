const devHostname = process.env.BLOX_API_HOST;
const devPort = process.env.BLOX_API_PORT;

export const PROTOCOL = window.location.protocol.replace(':', '');
export const WS_PROTOCOL = PROTOCOL.replace('http', 'ws') as 'ws' | 'wss';

export const HOSTNAME = process.env.DEV
  ? devHostname
  : window.location.hostname;

export const PORT = process.env.DEV
  ? Number(devPort)
  : Number(window.location.port) || (PROTOCOL === 'https' ? 443 : 80);

export const HOST = `${PROTOCOL}://${HOSTNAME}:${PORT}`;
export const WS_HOST = `${WS_PROTOCOL}://${HOSTNAME}:${PORT}`;
