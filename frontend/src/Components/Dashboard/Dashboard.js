import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext';
import History from '../../History/History';
import { InnerLayout } from '../../styles/Layouts';
import { dollar } from '../../utils/Icons';
import Chart from '../Chart/Chart';

function Dashboard() {
    const {totalExpenses,incomes, expenses, totalIncome, totalBalance, getIncomes, getExpenses } = useGlobalContext()

    useEffect(() => {
        getIncomes()
        getExpenses()
    }, [])

    return (
        <DashboardStyled>
            <InnerLayout>
                <h1>All Transactions</h1>
                <div className="stats-con">
                    <div className="chart-con">
                        <Chart />
                        <div className="amount-con">
                            <div className="income">
                                <h2>Total Income</h2>
                                <p>
                                    {dollar} {totalIncome()}
                                </p>
                            </div>
                            <div className="expense">
                                <h2>Total Expense</h2>
                                <p>
                                    {dollar} {totalExpenses()}
                                </p>
                            </div>
                            <div className="balance">
                                <h2>Total Balance</h2>
                                <p style={{
                            color: totalBalance() <0 ? 'var(--color-red)' : 'var(--color-green)'
                        }}>
                                    {dollar} {totalBalance()}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="history-con">
                        
                        <div className='history-2'>
                        <div className='Sal'>
                        <h2 className="salary-title">Min <span>Salary</span>Max</h2>
                        <div className="salary-item">
                            <p>
                                {dollar}{Math.min(...incomes.map(item => item.amount))}
                            </p>
                            <p>
                                {dollar}{Math.max(...incomes.map(item => item.amount))}
                            </p>
                        </div>
                        </div>
                        <div className='Exp'>
                        <h2 className="salary-title">Min <span>Expense</span>Max</h2>
                        <div className="salary-item">
                            <p>
                                {dollar}{Math.min(...expenses.map(item => item.amount))}
                            </p>
                            <p>
                                {dollar}{Math.max(...expenses.map(item => item.amount))}
                            </p>
                        </div>
                        </div>
                        </div>
                        <div>
                            <History />
                        </div>
                    </div>
                </div>
            </InnerLayout>
        </DashboardStyled>
    )
}
const DashboardStyled = styled.div`
    .stats-con{
        margin: 1rem;
        display: flex;
        // grid-template-columns: repeat(5, 1fr);
        align-items: space-between;
        gap: 2rem;
        .chart-con{
            display: flex;
            width : 60%;
            flex-direction: column;
            grid-column: 1 / 4;
            height: 100%;
            .amount-con{
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 2rem;
                margin-top: 2rem;
                .income, .expense{
                    grid-column: span 2;
                }
                .income, .expense, .balance{
                    background: #FCF6F9;
                    border: 2px solid #FFFFFF;
                    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                    border-radius: 20px;
                    padding: 1rem;
                    p{
                        font-size: 3.5rem;
                        font-weight: 700;
                    }
                }

                .balance{
                    grid-column: 2 / 4;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    p{
                        color: var(--color-green);
                        opacity: 0.6;
                        font-size: 4.5rem;
                    }
                }
            }
        }

        .history-con{
            width: 40%;
            h2{
                margin: 1rem 0;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            .salary-title{
                font-size: 1.2rem;
                span{
                    font-size: 1.8rem;
                }
            }
            .salary-item{
                background: #FCF6F9;
                border: 2px solid #FFFFFF;
                box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                padding: 1rem;
                border-radius: 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                p{
                    font-weight: 600;
                    font-size: 1.6rem;
                }
            }
        }
    }

    @media (min-width: 1300px) and (max-width: 1550px)
    {
    .stats-con
    {
        .chart-con{
            .amount-con{
                .income,.expense, .balance{
                    p{
                        font-size: 3vw;
                    }
                    h2{
                        font-size: 1.6rem;
                    }
                }
            }
        }

        .history-con
        {
            .salary-title{
                font-size: 1.2rem;
                span{
                    font-size: 1.4rem;
                }
            }
        }
    }
}

    @media (min-width: 700px) and (max-width: 1300px)
    {
    h1{
        font-size: 2rem;
    }
    .stats-con
    {
        display: flex;
        flex-direction: column;
        justify-content: center; 
        .chart-con{
            width: 100%;
            .amount-con{
                .income,.expense, .balance{
                    p{
                        font-size: 3.5vw;
                    }
                    h2{
                        font-size: 2rem;
                    }
                }
            }
        }

        .history-con
        {
            display: grid;
            width: 100%;
            grid-template-columns: 1fr;
            gap: 4rem;
            .history-2{
                display: flex;
                flex-direction: column;
                justify-content: fex-end;   
                padding-top: 1rem;
            }
            .salary-title{
                font-size: 1.2rem;
                span{
                    font-size: 1.4rem;
                }
            }
        }
    }
    }



    @media (min-width: 300px) and (max-width: 700px)
    {
    margin: 0;
    h1{
        font-size: 1rem;
    }
    .stats-con
    {
        margin: 0;
        margin-top: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center; 
        .chart-con{
            width: 100%;
            .amount-con{
                display: inline-block;
                height: 30%;
                .balance{
                    display: block;
                    align-itmes : flex-end;
                }
                .income,.expense,.balance{
                    h2,p{
                        font-size: 1rem;
                    }
                }
            }
        }

        .history-con
        {
            display: grid;
            width: 100%;
            grid-template-columns: 1fr;
            gap: 1rem;
            .history-2{
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                padding-top: 1rem;
            }
            .salary-title{
                font-size: 3.2vw;
                span{
                    font-size: 4.2vw;
                }
            }
            .salary-item{
                padding: 0.8rem;
                p{
                    font-weight: 300;
                    font-size: 3.2vw;
                }
            }
        }
    }
    }
`;

export default Dashboard