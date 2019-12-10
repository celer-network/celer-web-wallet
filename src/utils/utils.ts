/**
 * @license
 * The MIT License
 *
 * Copyright (c) 2019 Celer Network
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

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
