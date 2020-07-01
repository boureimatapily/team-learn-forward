import React, { Component } from 'react'
import MainContent from '../Components/Home/MainContent'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
      marginLeft:50,
      marginRight:50
    },
    
  }));
  

export default function Home() {
    const classes = useStyles();
 
        return (
            <div className="classes.root">
                <MainContent />
            </div>
        )
    }

