Permits.Permit=DS.Model.extend({
    PermitID: DS.attr('number'),
    PIN: DS.attr('string'),
    ApplicantName: DS.attr('string')

});

Permits.Permit.FIXTURES = [
    {
        id: 0,
        PermitID: 1,
        PIN: 'pin1',
        ApplicantName: 'kwasha'
    },
    {
        id: 1,
        PermitID: 2,
        PIN: 'pin2',
        ApplicantName: 'kwasi'
    },
    {
        id: 2,
        PermitID: 3,
        PIN: 'pin3',
        ApplicantName: 'maiyaa'
    }
];