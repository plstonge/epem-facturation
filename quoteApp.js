class QuoteApp {
  constructor(quote, editor) {
    this.quote = quote
    this.editor = editor

    // Bind events from Quote
    this.quote.bindInitialVisitChanged(this.onInitialVisitChanged)
    this.quote.bindReturningKeyChanged(this.onReturningKeyChanged)
    this.quote.bindServiceAdded(this.onServiceAdded)

    // Bind events from Editor
    this.editor.bindNewClicked(this.handleNewClicked)

    this.editor.bindInitialVisitChanged(this.handleInitialVisitChanged)
    this.editor.bindReturningKeyChanged(this.handleReturningKeyChanged)
    this.editor.bindServiceAddClicked(this.handleServiceAddClicked)
    this.editor.bindServiceTypeChanged(this.handleServiceTypeChanged)

    // Start with a new quote
    this.quote.startNew()
  }

  handleNewClicked = () => {
    if (this.quote.modified && confirm(tr('Confirm_New'))) {
      this.editor.reset()
      this.quote.startNew()
    }
  }

  handleInitialVisitChanged = (checked) =>{
    this.quote.setInitialVisit(checked)
  }

  handleReturningKeyChanged = (checked) =>{
    this.quote.setReturningKey(checked)
  }

  handleServiceAddClicked = () => {
    this.quote.serviceAdd()
  }

  handleServiceTypeChanged = (serviceID, typeID) => {
    this.quote.serviceSetTypeID(serviceID, typeID)
  }

  onInitialVisitChanged = (enabled) => {
    this.editor.setInitialVisit(enabled)
  }

  onReturningKeyChanged = (enabled) => {
    this.editor.setReturningKey(enabled)
  }

  onServiceAdded = (service) => {
    this.editor.serviceAdd(service)
  }
}


const app = new QuoteApp(new Quote(), new QuoteEditor())
