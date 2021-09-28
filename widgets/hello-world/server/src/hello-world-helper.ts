
/*
* Smart Mirror Widget
* 
* [ .. name here .. ]
* [ .. short description here .. ]
*/

class HelloWorld extends WidgetHelper {

  /**
   * name of the widget
   * 
   * @type {string}
   * @public
  */
  name: string = "HelloWorld";

  /**
   * description of the widget
   * 
   * @type {string}
   * @public
  */
  description:string = "This is an example Hello World widget.";


  /**
   * @constructor
   * 
   * @param {any} data - widget data
  */
  constructor(data: any) {
    super(data);

    this._addSocketListener();
  }

  /**
   * @_addSocketListener
   * 
   * Put your socket listeners in this method.
   * 
   * @private
  */
  _addSocketListener() {
    this.addSocketListener("REQUEST_HELLO_WORLD_DATA", this.handleListener.bind(this));
  }

 /**
   * @handleListener
   * 
   * Listener handle for this widget
   * 
   * @private
  */
  private handleListener() {
    // setup data object
    const data = { description: this.description };

    // broadcast data back to the mirror.
    this.addEmitter("BROADCAST_HELLO_WORLD_DATA", { data: data });
  }

  /**
   * @afterStart
   * 
   * Method to be called after the widget is started.
   * 
   * @param {any} widgetData - full widget settings object
   * @public
  */
  afterStart() {}

  /**
   * @afterStop
   * 
   * Method to be called after the widget is stopped.
   * 
   * @param {any} widgetData - full widget settings object
   * @public
  */
  afterStop() {}

  /**
   * @afterReload
   * 
   * Method to be called after the widget is reloaded.
   * 
   * @param {any} widgetData - full widget settings object
   * @public
  */
  afterReload() {}
}

export default HelloWorld;
