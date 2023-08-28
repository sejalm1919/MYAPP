import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img 
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAH0AvAMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAFBgMEBwIBAAj/xABBEAACAQMDAgQCBggEBAcAAAABAgMABBEFEiExQQYTIlFhcRQygZGhsQcjM0JSYsHhFXKC0ZKywvEWJCU0Y3Oi/8QAGgEAAwEBAQEAAAAAAAAAAAAAAgMEAQUABv/EACMRAAICAgICAwEBAQAAAAAAAAABAhEDIRIxIkEEEzJRYUL/2gAMAwEAAhEDEQA/ANWHn2nmXk8w2Yy8YGAAO4+NR2Or2etputpAbfftB6GT+1BdSvf8S04Su5isTj64x5v+wpPuzb2+qW9xp1uUtVnjEcxlKosm4A5weRjtU8cm6NkjZSoMZXOMjHFVLfTrS1XbFGFTngH35P40FbULpNVWG6MfklQUkiJAYn3HbpVy5a/+gysrIhIOMjJHtTbTBEL9NU0M2gWohIOy7AOD8DxWQbTsT4Gn/wDSHc3c9jEt5BGoEo2tGc5OOSaRZXWMKuCW64H9annbkXYWlC2WIhhRWheCCY9BX05I1CP8xWVT3jAYLlfZQas2Gv3tphYbmZUDBtoY4z2PWh+l/wBCfyE1VH6uWULGpbjpUwORWGeFv0la0ZFt72Nb+3z3GJF+R6Gtl0jU7XVbGO6s33Rt1U9VPsR2NVpkLRfOK+HSo2YBcmvUkUjg/jRGHZGRVO6doh6BmrZcDqRQ+/vYokPqDEe1LySUY2FHsmV90O5uCRQF3Zr58SZx8a+XUwwYFiK+tjAZi2Rk9CahyZVkqh0VxCEAUYx6nPWiBIigJboKEx3MUMrMXQD51Tv9ZSVjHG/o7lR1p0ciSB4tmL6wQ+o3br9UzyEfaxodMcL/AKl/Ort8QbifGceaxGfnVKflAP5lz99Rrs69eIy+BZCP0mxEc5SX/kFa1LPPf3hhjna3RQSwXq1Y14IvBbfpJimk5RI5SQO/oFNPiTW3+nFraUpk5PNU8qjRzsq8jQ7aOyRDbXDKzdMsc5oRLpeiiRvqde5pBOtz7SdzE98cUOfV2Lks5z8zWrLeqFcB4vGiutPMElxiAMAkeBwBUtnBCLMQCFHEeWjZuefcVkJLKn7WXP8A9hqxbS3K4aO7uFOMcSGlc0nZQ/iyZpJurieRkuNzXEPDMDnPsaJHxFeJpghmCtMoxvP71ZZG06liLm4Bbqd55qbzLnaP/OTge2+tWZL2C/iSCvjWXdpJaT6yuGLe1ZhcXjHK8nPUnvTH4jvZjAls9zJJuO47zkDFKEhBckGq8StWIyXHxPQxJqUEgDHXsKhRWZgqjJPtTLo1nHasXu3jDnuxAC0cpKIMIOTONB0fVbm4SWKPygDnMhx+Fa/ZR33hOxi1GWdWtJ2VbrygQEJ4Vj9vH20paDLaSThUuYt/8r5rTmt11Dw7c2GVYTQMgye5HFI5t9lEsSS0WbzVJTBGAww/sa5ju5lC7HxQOJwUjQA4RQBmiayRi23AjIHNTvJKxPE7uNQnkfy2kOfhVY3LxF0dtyn360NnusyEr1qMT7ny5yaVLI3thJFmaZQw2jjPNSecGQFGIobLcLuxXXmIAMnArImlpy8nANQtP5QKVw15GiMIxlumapQgvLvkfjPSj0aIV7MolkY8frW/Oqx/Zbj3ZTXd9CGuZSeR5jEVGdwT1nI3LihR1V+SSxdo/Fcrx/WET4/4VowpZpQ0v30I0X1+LX3dDG/5LRzUA0bBNnyNPfpf4c3J+ixMITBiLAY9+9UP8GeT1Gc5NfWTDB3tzmrG/HAZqFvj0K5AaTSrjcpWTzEPcdau2ujFzzI6gDqRXNnbzh9ktyYIVfKBcepvY/Cr8lw73LQhGWEkLz798VrprRv3ZF7KL2yRSFEmZ2zjheKoa7O+nQNvl9W7auBTHdFobpI7aNFiUY+JPxNJnjhPMeKZHDKmVb2ycGtxwTls378ldgSa581dwLMSepNVsM3QE1CjEDFFNIuVjEsXlF3kOVPGFq1+K0Kj5vZ1o8WJDKwxjgcUxxWFxcKJbKNJZh+6w5xVVYyrbcDjnAFFtGeWC4SQMVQdT0xUs5bstx40o0Vp7W8geOa6sEjYDJYZBOPmARTlPqctjNp1s2p/Q2aJJw7fVbP7vP3UL8TeIW1OOC3hVVSIeqXZksfbFMvgS8s77T4odWhDXMatFBK6dUOcgZ9iay03Zri0iwNQy+JB91TAuYWlByp7ZoWv1Qx+ue1XLKQ7fLY8HmpvZGV5nbzdykfKvoZMSb2GR7VBO226kXnrxVd5yjdgM15o9ZcmwzMQp964uJwbcJtwR3r3LSRgoRUUyRMcO3NYuzUyOGcoPX6j71bhAmXdnFDY2HmlT0HSp90kfToewphon3Y2yyD+ZqruMlV92WrN7zI599xqDGZYviy0v2dj/kj0mXyvFBYAHCvwfkoph1N5Ypip28gHI9qV7Y/+uznp+rfn2+rRYu9yPr846k1RJdM5Wb9Fy1WA+p25zRERQEcEUMtY4IQGlfcaurf2wGNmfsqecv4LSAyzeZbofJDzOcFifqkd6LaTaveSEH0sAcknFC0PkSIqkblIz3opbyyOzOjAKeOOKdGLAbstf4eUP6yT1EnaaUPE2nZubeE5CecVYjr6sYP4GnJJWwPLIbHU13dWltqFsyzhSSORTYqnZ5GVarpQsZwkchlDZx6cdK+8Ppuu2J/dU5ptubHbaN5pLvGGWInk9O570I0G1WHcW5dhk07k+OxkIeQThiDru5DURg8qW0ktpON64yOD1/tUSIAuAK6Fq8pATr2qVstXVHGg6WouvKvp5YvV+rlJyPh2Pwp5u7S6VUu55vNMETJEUjC7QT1OOOgH31J4StdRDol3p26JgP1roMDng5ovqltrNvfX0dnZPNbNjLjnOR2HWicXJdCMuXiqQrozLsY5xmr8OGBZevwoTPcPbRi3dWUg87lwalguwT6T6j2pHGiZF1oGbLtjdnk1He6cw2mJd+7rgdK4kuIreyuLvU7owRQgHheTUOm+L/D8sXlx6vHGx6/SFKGtjjk90baCcGnskIdmwPaq91bptLAAsOue9XrIrdgCC9tbhP8A45gT91TXmmzhCVhfHuBmmKCXaPAGGKPeDIAvyq7FdQLJJG6K4K4WqNza3T3KxqhQd93FFPD3hdryZpZpCiIfU3Xd8BQ8GFZn12oM0mBgZb86rMuJYT7EVt1x4a0my0e6hhWG1MqFWuZl3sAep57+3asz1+LQrRUh0uOeaTKoJ5pOuCMkKB9n215YJ1y9HQj8qD8fYnRts1e5b2jf/prxr0jIjJFcSgnULr4xt+a11HDHHjAJJp2qVkOf9lnSvOurggsSBR1IkRQr8GqtvJHYxCRlwWobdXMk0xdZQAe2anlc3rSFpk9vOxb1jvVyNpdp2Z29s1EbYwEbwD7EVZt8nYgBYk4AHvTgaCmnWcksW/JAbpz1qW4mgtom8rMzqPfAFWbGGMTxWpYYOQxz1P8A3r5rRRPJa3HodhgOeh9qojH2bQNaEsC83Q9AKXYIvJuJFPRWK/cafNTtkt7e181GjeSPljyNwxlaVdStVF+4iJh3kFXkB2SEjnB++gyaKMKPovUM0yeH7SN5EllICLy2e1CdG0q4a6EN1GU3ruRgchh8DRLWYZILNdNil8qS8fytw6hcc/7VN7Kn1o0iacRXWmeQQYZ4fL46ZBBH9aKR3itdyKWwFbaD8SuaS9IvJfoOmR3SOJrSd4pFIyQQo/oaL3d2Y1V1Rv2hk3EYzjH+9dBSVHMlB2XtS0bTdakBvoz5qjb5kb7SRSJq/hi/0eZpkiM1qrHbLF6sDtuHb8qIQ+JfLknfJ4J2rnnBNFYPFsFtbvJdtwilj3B+FKnCEj3FmP8A6SNXMsdrpytyf1kuPbtSGOtEfEGotq+s3l+yhBNKzIi8BVzwBQ+qMUOEaEzds9RmjOY2KH3U4NFtP8T67p3/ALPVryMZ6GQsPxzQivs0bSfYNj1Z/pV8Rw4W7+h3iDqJoeT9opg0b9L5M8dqmjwQNI3qZXYp88dRWRSNgUw+DdN8yRr2VeOiZrFijJ9Bcml2aJqusX+rybrq43IB9VAVUfZS9enzLqJlzjOF+VEZiViKgAF+PkKHXXoMR9v9qk+dmVrFDpHT+Bg8XlkCLCWNdcn80BkET5yfiKkW7s5pPKH6k5wHPQUMlAN/eEEghDyPmKHSs+COeaBQTRPmfmNuowl3Ec2ZVQD1RjioAkSAL5CnHvRbww0dzpwaeUPNHbuJUPUqBwT8RQxtQslONw4pMm06QtHkRkRPUx2jsaI6M/re6fIjjIXcOoJ7j5DJodFvlchjtGMYq8IZ7bSGEiPHvl3qHXBIwBn86ZB3Kg6GS1tBJKs1hcxzbDkxq3q+40wajZxXezzFK5Ayy9UPvWcWJMkq7n+Ct9U57YNOmjazd2W2DVUNxb9NzfWX7e9VxYLVBJoXuLOWwulDSxn0Z/f9sfPtSyoe2ciC6Ro84aGdTx8O/wCNPWpwC4so9R08iUxryAfrJ7fMf1pZ1qey1CxNw1sHnjGGG3a4HvQ5IWHjnR1FfCytGngVUAGWhDB4z/l5ytLWoa7HNfC5+hI0w/ZtIxYJ8gQBVYCNlKwQSk+7OSaFTX0EcqgIWYsF4HepOGyrkH18Qaq8xnadhnrmi8Hj++gRY5kEgXvnBpWhmLXUCSKCjnBFFtcsrMeWYIRGTy2w44+VH9UqA+yHTC//AI1WX69ujjuHUH+lL/jjxNBPohtoLC3gmncL5qKAQvfpXI0ebyhLFLE6n90+k0la/c/SNQZVPoh9A+ff8a9hi3OgM8oxx6Bn2Yr417XldA5x8K8PAr3FcyHANePHtrbve3cdvHnLnkjsO5rTtOtUtLaOFFAAFLHg7TdkTXkq+p/q/Knizgfb5pXIxijlJYsbmzVHlKgaryTI7Ou3kgD4VSvyVmgTrk4IogAdr5PViRVS9QNNEx7E/lXzrm5Ttn0yiowUULiwNPqV3GvUqf8AmFUNQia3uBE6gN1zRCF2S8u3JwQhJP8AqFQ37wXMqsr73roRb0cT5H7Zf0DUUspw8gyCjCQfyHg17caOglPkruiPKMvIIqtZabcGSYFNoa3JG751ettE1QR4guSEBPCnIpc5RT7FI1rStI0j6ZJ9E02FWtsEyONzFu3NKfj6WZ7sM4QlkAALY4FPPhwohm5wZXJGT27Ut+MraGT6RHPFnb6lYjO341Hgy8cibLpQtOhFsShmxJAwGescyj7eaeNOt0ntdoeUbhgbtr/kc0gNbsk+3Zhs4DqQKatAt4wVYz7Qv7oJI5/CuxEkYwaXJf6BM0V3E8tg/BYcqCff2oTryLZ6i2w+iQeZG4/eXt9o6H5U52cCXmnSxCdpI3QqVfp09+tJAR5bdtKvyBc2rlUfrgjr8wRRsFdnmlQQ3E26MqHU52nvSn4n0prXV4544wsMkoLovRD3+w0cXzLaYqwKSKai1zVhL5Z25lVcPk5B/vS50lsdC70U7LTb27v4WhhPlryWJABP20wappt9HCJZbZ/LK7dw9QH2ilaz1i6juQwOR2FaB4W8QmQGK7Hobjmp/tY76daFXVbpNN0FrjgS4KJkclieKzQ5J5JNPH6UZbca79CsnzDCoZ0B4V25x91JJWqsMUly/pBmflRGa8NetxUDvinCiQvgV1ZxfS7tIznZnLYGTioYopbh9sY+Z9qcvBNhDHeE3IIU4Uy4/ClzyKKHYsTmx3/we3tNM06OEkzzRCRzn0oKKlEhCxwcqE6GoZ5ESUQw8RRjYvwA/vUIYNPhiSO9R5cspxqQ5QUZaAM7hZsEgFs4BqtdNmRP8x/Ku7xFa4Rj1BODVe5O50A/iP5Vz4rZ3ZdAGDc094FXcTGRjH81fadbi0YTmJWkXoCO9E/C6eZrV36dw8s8f6qMTaSyvJIwVVBzVvL0cXNG5ADSmu31Uy3bttmzGSTwob+9SM08TsiyzLg8hWIGaMWsCLKJZMFkIKRfxH417Naq8rNjGTmse2L+pmkWd3bzSApG0bqemao+MYvMg8zBKshV/u4oPrTSWbLcxSNu9ias22pSat4cujOoBQcEGubGO0y96M/vPLR1JV95HA65ozpU58lVPKMQSM+oGhF42dy4/ZtjPz/7VTa8e2wUHqJ65ruRdIiatmveG7kJEYi5cq+M5+6lbxbm08TSNkhZ1SUfkfyoZpOpXUuGklbgDhDtH4VU8U3Mn0+2IP1lI57c5r3226C+hrYY13UIJIUVVzcKPW47D2+dJtzPvkOTXt3cyFSD70NaQ5NJk3IfGPEuJIFbIo7pWobGGTSvG5q3A5DrS5IbFmo6QmjapldQsraV36u8YJP20t+IfB9lp18Va1Bt5DmKQEjj+H5iq2m3EiAFT0ox4j8S3UelRWpiicgBhI4yQR7UKlJ6syUIp20JGsaVpNp+rEUpmP8ADKcL8/jQNdPtxydzewJohcuzyM7nLMck19DGCAe+cVSpSUeyeWOLd0WtG02K4bEzLDEo3H447U6aBppjjW6uvQuMwRAcAfxUrPYxQJHM7O5zwoOBWh8TwRswACxqAB8BQds9N8Y6B1xdDewIxg1GkhIyvSujGrycjvVpooxCQFGRxmlNdi4rYt3DfrB86qT/ALVP85/IVYuDmQfOq0/7VP8AOfyFSx7O1L8kXhYsusXmzqUx/wDs01t5m7EmSPalrwQiya3fhxnEQx/xmndbZZZAGY8VY2cmX6Bz28S4dR+FfGO37j8Ku3SCEbV5Ge9eLbI6hj1NDy2Ymf/Z" 
              alt="" 
            />
            <p>
                Lorem ipsum dolar sit amet consectetur adipisicing elit.Voluptate qui 
                necessitatibus nostrum illum reprehenderit
            </p>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Style</li>
            <li className="sidebarListItem">Sport</li>
            <li className="sidebarListItem">Tech</li>
            <li className="sidebarListItem">Cinema</li>
            
        </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-square-facebook"></i>
            <i className="sidebarIcon fa-brands fa-square-twitter"></i>
            <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
            <i className="sidebarIcon fa-brands fa-square-instagram"></i>
                
            </div>
        </div>
    </div>
        
    
    
  )
}
