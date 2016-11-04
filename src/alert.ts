var uuid = require('uuid');

export class Alert {
  public title: string;
  public service: string = "";
  public serviceInError: string = "";
  public correlationId: string;
  public timeUID: string;
  public businessImpact: string = "";
  public technicalImpact: string = "";
  public severity: string = "";
  public timeStampUTC: Date;
  public host: string = "";
  public additionalInformation: string = "";
  public owner: string = "";
  public status: string = "";
  public modifiedUTC: Date;

  constructor(title: string, correlationId: string = null) {
    this.title = title;
    this.timeStampUTC = new Date();
    this.modifiedUTC = new Date();
    this.timeUID = uuid.v1();
    this.correlationId = correlationId || this.timeUID;
  }

  public static create(alert_base: any): Alert {
    let alert: Alert = new Alert(this.selectRandom(alert_base.title));
    alert.service = this.selectRandom(alert_base.service);
    alert.serviceInError = this.selectRandom(alert_base.serviceInError);
    alert.businessImpact = this.selectRandom(alert_base.businessImpact);
    alert.technicalImpact = this.selectRandom(alert_base.technicalImpact);
    alert.severity = this.selectRandom(alert_base.severity);
    alert.host = this.selectRandom(alert_base.host);
    alert.additionalInformation = this.selectRandom(alert_base.additionalInformation);
    return alert;
  }

  private static selectRandom(array: any): string {
    return array[Math.floor(Math.random() * array.length)];
  }
}