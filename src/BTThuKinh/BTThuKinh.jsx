import React, { Component } from 'react'

import './btThuKinh.css'

export default class BTThuKinh extends Component {

    listGlass = [
        {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./img/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 2,
            "price": 50,
            "name": "GUCCI G8759H",
            "url": "./img/v2.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 3,
            "price": 30,
            "name": "DIOR D6700HQ",
            "url": "./img/v3.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 4,
            "price": 70,
            "name": "DIOR D6005U",
            "url": "./img/v4.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 5,
            "price": 40,
            "name": "PRADA P8750",
            "url": "./img/v5.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 6,
            "price": 60,
            "name": "PRADA P9700",
            "url": "./img/v6.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 7,
            "price": 80,
            "name": "FENDI F8750",
            "url": "./img/v7.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 8,
            "price": 100,
            "name": "FENDI F8500",
            "url": "./img/v8.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 9,
            "price": 60,
            "name": "FENDI F4300",
            "url": "./img/v9.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    ]

    state = {
        glass: {
            id: "",
            price: "",
            name: "",
            url: "",
            desc: ""
        }
    }

    renderGlasses = () => {
        return this.listGlass.map((glass) => {
            return <div className="col-2" key={glass.id}>
                <div className='glassItem' onClick={() => {
                    this.setState({
                        glass: {
                            id: glass.id,
                            price: glass.price,
                            name: glass.name,
                            url: glass.url,
                            desc: glass.desc
                        }
                    })
                }}>
                    <img src={glass.url} width={100} alt="" />
                </div>
            </div>
        })
    }


    testGlass = () => {
        if (this.state.glass.url !== "") {
            return <img src={this.state.glass.url} alt="" />
        }
    }

    showInfo = () => {
        if (this.state.glass.desc !== "") {
            return <div className='mx-1'>
                <h5>{this.state.glass.name}</h5>
                <div>
                    <span className="glassPrice">${this.state.glass.price}</span> <span style={{ color: 'green' }}>Stocking</span>
                </div>
                <p className="pt-1">{this.state.glass.desc}</p>
            </div>
        }
    }

    render() {
        return (
            <div className='mainGlass'>

                <h1 className='text-center py-3 title bg-dark'>TRY GLASSES APP ONLINE</h1>

                <div className='container'>
                    <div className="row py-5 modelContent">
                        <div className="col-6 modelRight p-0">
                            <div className="glassesCard">
                                <div className="glassesModel" id="avatar">
                                    <img src="./img/v8.png" alt="" />
                                </div>
                                <div id="glassesInfo" className="glassInfo">
                                    <div className='mx-1'>
                                        <h5>FENDI F8500</h5>
                                        <div>
                                            <span className="glassPrice">$100</span> <span style={{ color: 'green' }}>Stocking</span>
                                        </div>
                                        <p className="pt-1">Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 modelLeft p-0">
                            <div className="glassesCard">
                                <div className="glassesModel" id="avatar">
                                    {this.testGlass()}
                                </div>
                                <div id="glassesInfo" className="glassInfo">
                                    {this.showInfo()}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row glassContent ">
                        {this.renderGlasses()}
                    </div>



                </div>
            </div>
        )
    }
}
