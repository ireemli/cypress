describe('HTTP Requests', () => {
    it('GET call', () => {
      cy.request('GET','https://pokeapi.co/api/v2/berry').its('status')
      .should('equal',200);
    })
  })