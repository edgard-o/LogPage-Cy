describe('Remove all undesirable email from promotion and social tab', () => {
    beforeEach(() => {
        cy.visit('https://accounts.google.com/v3/signin/identifier?dsh=S-1996121284%3A1690475885268371&continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&ifkv=AeDOFXgF1_wFcMGhLQetjRbzqVrUYmkSuIVsScnyrD_UclUv15y22VXH3NBZk9gSkxPN85GQV-Wyzw&osid=1&passive=1209600&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin')


    });
    
    it('Test', () => {

        cy.get('#identifierId').should('be.visible').click().type('edgard.ohnishi@gmail.com');
        
        cy.get('#identifierNext > div > button > div').should('be.visble').click();
       
        cy.get('#password > div.aCsJod.oJeWuf > div > div.Xb9hP > input').click().type('402155122')

        cy.get('#\:1t').click().should('have.class','aAy aJi-aLe J-KU-JO J-KU-KO')
        cy.get('#\:1y > div.J-J5-Ji.J-JN-M-I-Jm > span').click();
        cy.get('#\:4 > div > div.nH.aqK > div.Cq.aqL > div > div > div:nth-child(2) > div.T-I.J-J5-Ji.nX.T-I-ax7.T-I-Js-Gs.mA').click()
        
    });
});