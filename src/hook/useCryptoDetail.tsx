import React, { useEffect } from "react";
import io from "socket.io-client";
import WebSocketUrlConstants from "../constants/WebSocketUrlConstants";

const useCryptoDetail = () => {

    const [bitcoinDetail, setBitcoinDetail] = React.useState<Object>();
    const [etherDetail, setEtherDetail] = React.useState<Object>();
    const [litecoinDetail, setLitecoinDetail] = React.useState<Object>();
    const [moneroDetail, setMoneroDetail] = React.useState<Object>();
    const [rippleDetail, setRippleDetail] = React.useState<Object>();
    const [dogecoinDetail, setDogecoinDetail] = React.useState<Object>();
    const [dashDetail, setDashetail] = React.useState<Object>();

    useEffect(() => {
        const socket = io("http://localhost:3088");
        socket.on(`${WebSocketUrlConstants.BITCOIN}-client`, (data: string) => {
            setBitcoinDetail({...JSON.parse(data),  name: "Bitcoin" });
        });
        socket.on(`${WebSocketUrlConstants.ETHER}-client`, (data: string) => {
            setEtherDetail({...JSON.parse(data),  name: "Ether" });
        });
        socket.on(`${WebSocketUrlConstants.LITECOIN}-client`, (data: string) => {
            setLitecoinDetail({...JSON.parse(data),  name: "Litecoin" });
        });
        socket.on(`${WebSocketUrlConstants.MONERO}-client`, (data: string) => {
            setMoneroDetail({...JSON.parse(data),  name: "Monero" });
        });
        socket.on(`${WebSocketUrlConstants.RIPPLE}-client`, (data: string) => {
            setRippleDetail({...JSON.parse(data),  name: "Ripple" });
        });
        socket.on(`${WebSocketUrlConstants.DOGECOIN}-client`, (data: string) => {
            setDogecoinDetail({...JSON.parse(data),  name: "Dogecoin" });
        });
        socket.on(`${WebSocketUrlConstants.DASH}-client`, (data: string) => {
            setDashetail({...JSON.parse(data),  name: "Dash" });
        });

        return () => {
            socket.disconnect();
        }
    }, [])

    return { bitcoinDetail, etherDetail, litecoinDetail, moneroDetail, rippleDetail, dogecoinDetail, dashDetail };
}

export default useCryptoDetail;