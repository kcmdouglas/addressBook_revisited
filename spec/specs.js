describe('Contact', function() {
  it('creates a new contact with provided properties', function() {
    var testContact = new Contact("Anonymous", "Personage");
    expect(testContact.firstName).to.equal("Anonymous");
    expect(testContact.lastName).to.equal("Personage");
    expect(testContact.addresses).to.eql([]);
  });
});
