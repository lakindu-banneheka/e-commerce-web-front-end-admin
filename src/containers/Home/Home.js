// import { Container } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Layout from '../../components/layout/Layout';

const styles = {
    container:{
        marginTop:'10px',
        height:'600px',
        display: 'grid',
        columnGap: 3,
        rowGap: 1,
        gridTemplateColumns: 'repeat(12, 1fr)',
    },
    sideBar:{
        position:'fixed',
        backgroundColor:'#424242',
        top:'65px',
        bottom:'0',
        left:'0',
        width:'220px',
        padding:'0px 0px 0px 0px',
        margin:'0px'
    },
    main:{
        marginLeft:'auto'
    }
}


const Home = () => {
    return (
        <div>
            <Layout>
                <Box
                    sx={styles.container}
                    >
                        <Box sx={styles.sideBar} >
                            side Bar
                        </Box>
                        <Box sx={styles.main} >
                            container
                        </Box>
                    </Box>
                
                {/* <div style={{backgroundColor:'#fff',margin:'0px',padding:'5rem',textAlign:'center'}} >
                    <h1>Welcome to Admin Dashboard</h1>
                    <p>Ad commodo ea deserunt veniam velit do consequat consectetur in adipisicing dolore Lorem. Laboris officia exercitation sint occaecat dolore eiusmod.
                     Voluptate ex reprehenderit irure consectetur magna officia labore officia labore excepteur eiusmod quis. Mollit elit velit anim velit ipsum Lorem 
                     ad fugiat nulla magna ad consectetur cupidatat exercitation. Eiusmod ut aute dolore irure reprehenderit eiusmod. Laboris ullamco ipsum do enim non 
                     adipisicing reprehenderit enim qui. Veniam consectetur in aute non reprehenderit veniam veniam sint elit commodo enim ullamco.</p>
                </div> */}
            </Layout>
        </div>
    );
};

export default Home;