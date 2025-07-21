// hotelChatbot.js

class HotelChatBot {
  constructor() {
    this.responses = {
      greeting: "Welcome to The Oberoi Resort! How can I assist you today?",
      availability: "We have Super Deluxe, Deluxe, Suite, and Standard rooms available. Any other details you want?",
      booking: "To book a room, you can book directly from our website, MakeMyTrip, or by calling our number.",
      charges: "For prices, you can check our website or contact us directly.",
      location: "Our Resort is located in the city centre of Udaipur, opposite Lake Pichola, surrounded by City Palace & lakeside ghats.",
      description: "Boat rides on peaceful Lake Pichola are available for guests.",
      amenities: "Our resort offers free WiFi, swimming pool, gym, spa, complimentary breakfast, and all the luxury you need.",
      checkin: "Check-in time is from 12 PM onwards.",
      checkout: "Check-out time is until 11 AM noon.",                                                                                  
      thanks: "Thank you for choosing The Oberoi Resort! Let me know if you have more questions.",
      default: "Sorry, I didn't understand that. Could you please rephrase?",
    };
  }

  getResponse(message) {
    const msg = message.toLowerCase();

    if (msg.includes("hello") || msg.includes("hi")) {
      return this.responses.greeting;
    }
    if (msg.includes("availability") || msg.includes("rooms")) {
      return this.responses.availability;
    }
    if (msg.includes("book") || msg.includes("reservation")) {
      return this.responses.booking;
    }
    if (msg.includes("charge") || msg.includes("price") || msg.includes("cost")) {
      return this.responses.charges;
    }
    if (msg.includes("location") || msg.includes("where")) {
      return this.responses.location;
    }
    if (msg.includes("describe") || msg.includes("description") || msg.includes("about resort")) {
      return this.responses.description;
    }
    if (msg.includes("amenities") || msg.includes("facilities")) {
      return this.responses.amenities;
    }
    if (msg.includes("check-in") || msg.includes("check in")) {
      return this.responses.checkin;
    }
    if (msg.includes("check-out") || msg.includes("check out")) {
      return this.responses.checkout;
    }
    if (msg.includes("thank")) {
      return this.responses.thanks;
    }
    return this.responses.default;
  }
}

module.exports = HotelChatBot;
