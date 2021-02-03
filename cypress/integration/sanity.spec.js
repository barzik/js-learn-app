context('Sanity check', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })
  
    describe('First page is loading', () => {
      it('Side Menu is there', () => {
        cy.get('[data-cy=nav-list]')
          .find('[data-cy=list-item]')
          .first()
          .invoke('text')
          .should('match', /01/i)
      })
      it('Body is there', () => {
        cy.get('[data-cy=main-container]')
          .find('h1')
          .should('be.visible');
      })
    })

    describe('Collapsable menu is working', () => {
        it('click on sidebar menu is open callapsed button', () => {
          cy.get('[data-cy=nav-list]')
            .find('[data-cy=list-item]')
            .eq(0)
            .click();
           cy.get('[data-cy=open-item-true]')
            .should('be.visible');
        })
      })

    describe('Navigation Menu', () => {
        it('click on sidebar menu is changing context', () => {
            cy.get('h1').invoke('text').then((text1) => {
                cy.get('[data-cy=nav-list]')
                .find('[data-cy=list-item]')
                .eq(1)
                .click();
                cy.get('[data-cy=open-item-true]')
                .find('[data-cy=sub-item]')
                .first()
                .click();
                cy.get('h1').invoke('text').should((text2) => {
                    expect(text1).not.to.eq(text2)
                })
            })
        })
      })
  
  })
  