// 🌎 BACKEND DEPLOYED LINK ⬇️
// https://mi-voz-api.herokuapp.com/
// 🌎 FRONTEND DEPLOYED LINK ⬇️
// https://mi-voz-mi-voto.herokuapp.com/

const endpoints = {
  users: 'http://localhost:3001/api/v1/users',
  /* POST newEmailSubscriber:
    REQUEST OBJECT:
      {
        first_name: 'string',
        last_name: 'string',
        state_name: 'string', ** 'Colorado' or 'Maine'**
        email: 'string',
        language: 'string' ** 'en' or 'es' **
      }
    RESPONSE OBJECT:
      SUCCESSFULLY CREATED:
      {
        success: "You are now registered to receive notifications about upcoming elections in your state. A confirmation email has been sent to #{user.email}.",
        status: 200
      }
      EMAIL DOES NOT INCLUDE '@':
      {
        error: "Error creating subscriber. A valid email must be provided.",
        status: 400
      }
      EMAIL ALREADY EXISTS:
      {
        error: "#{user.email} is already susbscribed to receive election notifications.",
        status: 400
      }
      GENERAL ERROR:
      {
        error: "Error creating subscriber. Please ensure all elements in the form are filled out correctly.",
        status: 400
      }
      SUCCESSFULLY REMOVED:
      {
        success: "You have successfully unsubscribed from Mi Voto, Mi Voz's email list. You will no longer receive email notifications at #{user.email}."},
        status: 200
      }
  */
  delete: 'http://localhost:3001/api/v1/users',
  /* DELETE subscriber:
    SUCCESS:
    {
      success: "You have successfully unsubscribed from Mi Voz, Mi Voto's email list. You will no longer receive email notifications at #{user.email}."
    }
    FAILURE:
    {
      error: "#{user.email} is not currently subscribed to receive election notifications."
    }
  */
  elections: 'http://localhost:3001/api/v1/elections',
  /*
    QUERY PARAMS? LOCATION? STATE?  I.E. CO?
  */
  referendums: 'http://localhost:3001/api/v1/referendums',
  state: 'http://localhost:3001/api/v1/state'
}

export default endpoints;
