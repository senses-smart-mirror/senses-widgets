const got = require('got');

/*
* Smart Mirror Widget
* 
* [ .. Chuck Norris Quote .. ]
* [ .. This widget shows random quotes from Chuck Norris with a possibility to set the interval. .. ]
*/

const BASE_URL = "https://api.chucknorris.io/jokes/random";

class ChuckNorris extends WidgetHelper {

  name: string = "ChuckNorris";

  interval!: ReturnType<typeof setInterval>;

  // constructor
  constructor(data: any) {
    super(data);

    this._addSocketListener();
  }

  /*
   * method to add listeners
   */
  _addSocketListener() {
    this.addSocketListener('REQUST_CHUCK_NORRIS_DATA', this.handleListener.bind(this));
  }

  private handleListener() {
    Logger.log('[Chuck Norris] - Getting data..');

    this.getChuckNorrisQuote();

    if (this.interval) {
      clearInterval(this.interval);
    }

    this.interval = setInterval(this.getChuckNorrisQuote.bind(this), this.getSettingValue('interval') || 60000);
  }

  private async getChuckNorrisQuote() {

    let chuckNorrisQuote: any = {};

    const cacheItem = this.getFromCache();
    if (cacheItem) {
      this.addEmitter("BROADCAST_CHUCK_NORRIS_DATA", cacheItem.data);
      return;
    }

    try {
      Logger.log('[Chuck Norris]: Preforming API call:', BASE_URL);
      const result = await got(BASE_URL, {responseType: 'json'});
      
      if (result && result.body) {
        chuckNorrisQuote = result.body;
      }
    } catch (e) {
      Logger.error('[Chuck Norris]', e, BASE_URL);
    }

    const newCacheItem = {
      timestamp: Date.now(),
      data: chuckNorrisQuote
    }
    this.addToCache(newCacheItem);

    this.addEmitter("BROADCAST_CHUCK_NORRIS_DATA", chuckNorrisQuote);
  }

  /*
   * start the widget
   */
  afterStart() { }

  /*
  * afterStop
  */
  afterStop() { }

  /*
  * afterReload
  */
  afterReload() { }
}

export default ChuckNorris;
