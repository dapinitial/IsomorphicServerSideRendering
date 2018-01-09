import React, {Component} from 'react';

class ContactForm extends Component {
  render() {
    return (
      <div>
        David Puerto
        <br/>
        80 S. Main
        <br/>
        Seattle, WA 98104 USA
        <br/>
        me@davidpuerto.com
        <br/>
        206-397-9040
        <br/>
        <h4>E-mail me</h4>
        <form method="POST" action="/sendmail">
          <p>
            <label htmlFor="sendmail_name">Name:
            </label>
            <input type="text" name="sendmail_name" id="sendmail_name"/>
          </p>
          <p>
            <label htmlFor="sendmail_email">E-mail:
            </label>
            <input type="text" name="sendmail_email" id="sendmail_email"/>
          </p>
          <p>
            <label htmlFor="sendmail_phone">Phone Number:
            </label>
            <input type="text" name="sendmail_phone" id="sendmail_phone"/>
          </p>
          <p>
            <label htmlFor="sendmail_instagram">Instagram:
            </label>
            <input type="text" name="sendmail_instagram" id="sendmail_instagram"/>
          </p>
          <p>
            <label htmlFor="sendmail_message">What's up?</label>
            <br/>
            <textarea name="sendmail_message" id="sendmail_message" rows="5"></textarea>
          </p>
          <p>
            <button type="submit">Submit</button>
          </p>
          {/* <div>
            {window.location.hash === '#success' && <div id="success">
              <p>Your message has been sent!</p>
            </div>}
            {window.location.hash === '#error' && <div id="error">
              <p>An error occured while submitting the form.</p>
            </div>}
          </div> */}
        </form>
      </div>
    )
  }
}

export default ContactForm