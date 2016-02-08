describe('Contact', function() {
  var testContact = new Contact("Anonymous", "Personage");

  it('creates a new contact with provided properties', function() {
    expect(testContact.firstName).to.equal("Anonymous");
    expect(testContact.lastName).to.equal("Personage");
    expect(testContact.addresses).to.eql([]);
  });

  it('adds the fullName method to all contacts', function() {
    expect(testContact.fullName()).to.equal('Anonymous Personage');
  });
});

describe('Address', function() {
  var testAddress = new Address('400 6th Ave', 'Portland', 'Oregon');

  it('creates a new address with the given specifications', function() {
    expect(testAddress.street).to.equal('400 6th Ave');
    expect(testAddress.city).to.equal('Portland');
    expect(testAddress.state).to.equal('Oregon');
  });

  it('adds the fullAddress method to all addresses', function() {
    expect(testAddress.fullAddress()).to.equal('400 6th Ave, Portland, Oregon')
  });
});
