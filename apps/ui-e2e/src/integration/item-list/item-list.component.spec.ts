describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=itemlistcomponent--primary'));

  it('should render the component', () => {
    cy.get('happyorg-item-list').should('exist');
  });
});
