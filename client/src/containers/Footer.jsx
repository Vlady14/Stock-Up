import React from 'react';
import Footer from "../components/Footer2/Footer2";
// import {Footer.Link} from 'react-router-dom';

export function FooterContainer() {

    return(
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                <Footer.Column>
                    <Footer.Title>About Us</Footer.Title>
                    <Footer.Link href="#">Story</Footer.Link>
                    <Footer.Link href="#">Clients</Footer.Link>
                    <Footer.Link href="#">Testimonials</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Services</Footer.Title>
                    <Footer.Link href="https://www.nasdaq.com/market-activity/stocks">Stocks Report</Footer.Link>
                    <Footer.Link href="https://www.bankrate.com/calculators/retirement/investment-goal-calculator.aspx">Investment Calculator</Footer.Link>
                    <Footer.Link href="#">Business Transactions</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Developers</Footer.Title>
                    <Footer.Link href="https://github.com/Hoybaby">Michael Bartek</Footer.Link>
                    <Footer.Link href="https://github.com/DevVlady">Vladimir Dimitrov</Footer.Link>
                    <Footer.Link href="https://github.com/joshobando">Joshua Obando</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Social</Footer.Title>
                    <Footer.Link href="https://google.com">LinkedIn</Footer.Link>
                    <Footer.Link href="#">Github</Footer.Link>
                    <Footer.Link href="#">Instagram</Footer.Link>
                </Footer.Column>
                </Footer.Row>
            </Footer.Wrapper>
        </Footer>
        )
}