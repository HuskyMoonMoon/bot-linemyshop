import * as moment from "moment";

export type ShopConfig = {
    url: string,
    hours: number,
    minutes: number,
    list: string[][],
    shopName: string,
    recipient: string
};

export const script = ({ url, hours, minutes, list, shopName, recipient }: ShopConfig) => {
    describe("Line shop", () => {
        context("App flow", () => {
            it("goes to login flow", () => {
                cy.visit(url);
                cy.get("[data-atd=navigation-my]").click();
                cy.get("[data-atd=modal-login-login-button").click();
                cy.contains("QR code login").click();
                cy.url({ timeout: 180000 }).should("eq", url);
                const now = moment();
                const until = now.clone().startOf("day")
                    .add(hours, "hours")
                    .add(minutes, "minutes")
                    .add(moment().get("milliseconds"), "milliseconds");
                cy.wait(until.diff(now, "milliseconds"));
                cy.reload();

                list.forEach(item => {
                    try {
                        cy.get("[data-atd=search-tab]").click();
                        cy.get("[data-atd=input-search]").type(item[0]);
                        cy.get("[data-atd=button-search]").click();
                        cy.get(".px-15xem").contains(item[0]).click();
                        cy.get("[data-atd=add-to-cart-button]").click({ force: true });
                        cy.get(":nth-child(2) > .flex-wrap").contains(item[1]).click();
                        cy.get("[data-atd=variant-add-to-cart-button]").click();
                    } finally {
                        cy.visit(url);
                    }
                });
                cy.get("[data-atd=cart-button]").click();
                cy.contains(shopName).parent().get("[data-atd=cart-checkbox]").click();
                cy.get("[data-atd=cart-buynow-button").click();
                cy.contains(recipient).click();
                cy.contains("Kerry").click();
                cy.contains("Bank Transfer").click();
                cy.get("[data-atd=placeorder-button").click();
            });
        });
    });
}
export default script;
