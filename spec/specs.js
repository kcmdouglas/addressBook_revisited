describe('Contact', function() {
  var testContact = new Contact("Anonymous", "Personage");

  it('creates a new contact with provided properties', function() {
    expect(testContact.firstName).to.equal("Anonymous");
    expect(testContact.lastName).to.equal("Personage");
    expect(testContact.addresses).to.eql([]);
  });
});

  it('adds the fullName method to all contacts', function() {
    expect(testContact.fullName()).to.equal('Anonymous Personage');
  });
