import { grey } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

export const CELER_THEME = createMuiTheme({
  palette: {
    primary: grey,
    secondary: grey
  }
});

export const CELER_FONT =
  //'system-ui, -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Lucida Grande, Segoe UI, sans-serif';
  'Helvetica Neue, Helvetica, Lucida Grande, Segoe UI, sans-serif';

export enum TxStatus {
  IDLE,
  PROCESSING,
  SUCCEEDED,
  FAILED
}
