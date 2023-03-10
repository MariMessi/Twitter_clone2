import { useState, useEffect } from "react";
import "./index.css";

const PostItem = ({ postData, setModalVisibility }) => {
    const [isActive, setActive] = useState(false);
    const onHandleClick = () => {
        setModalVisibility(true);
    }
    const { userId, body } = postData;
    const [userData, setUserData] = useState({});

    useEffect (() => {
        fetch (`https://dummyjson.com/users/${userId}`).then((res) => res.json())
        .then((data) => setUserData(data));
    }, []);

    return (
        <div className="PostItem">
            <img className="PostItem__photo" src ={userData.image} alt = {userData.username} />
            <div className="PostItem__content">
                <span>{userData.firstName}</span>
                <span> @{userData.username}</span>
                <p>{body}</p>
                <div className="PostItem__content--icons">
                <button onClick={onHandleClick}className="comments_button"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEwElEQVR4nO1Ze4gVZRT/NiN7i5WlYkQUQdCD6AFlIYGCRa075+v7Ix9sO+fMxV27e8+Zu5sS0aV/ehCVRVFE9CD/6g9LLCIJlqwgM4uCIiG0h5o9tCArW7PizHyz3u3u6u56HyPsDwaGOd98r/M+x5hJTGISzUBb0CWXA8bdFvk5IBkAlG8AeS+Q/J08+q7fSAZ0jCVebrH3Mv3XtBoO5RpAeRKQd1iSfyfy6L86RxD1Xt3s/bdZLAGQbB6+Kf4WiF8GlDsh4vkdhb4LFnevmu6cmzKvUjle3/Wb0pIxKGssynfD5kD5MCAJGs4lvTVdrGrxny3yIzbkqya4eJv+q3MA8Z4hLhFvclS+su4H0Bu1JA+prPuFvtdb7eysnFivNZzISRal15LsTrnDByzx/bp2XRYIlpfPtiTvpAdIFPfRpUvLp5gGwfX0nGpRVh+6NBlwXcUZRzXpojvicy3yVi+/uyzxDaZJcJHMU877w3wZUHHOhCa6FXvPAeRtfqJP28P+2abJaA/7ZwPyZ17UvlLpGLe8qsJ5ffhILU7DdnukvaCcAcQfp6ZaPhiXXlqUJ7w4bXedfTNNixEUeJYl/trvafWYfoJQbrQk/wDKoDeruYBLne+g7k3157CDK5XKcYDyiRepiskZLPF9nitbdK+jDoRIbOalVU9MznBLoXByFg75CGBkZP4iIC6anCIgYS8xb4/uM1LL8Ft72H+aySlcYeU0i/K76sqILiEJq1N7vdbkHBZ5nY/LohoiIL/k9WO5yTmCSHr8pb9QQ8ycjgtL15qcA5DnZs66hmiRf0gUfbxhQAvgOvtmetHaXUO0KPuVuLBYnGpyjoXF4lTvT/bXEIH4TyXWM8doFJzmLmma/EcN0RLvTESrwLPMMS5aW/wp55qcwxXi6316sbmGCMjPJsSISybnsMQrvNV6voZ4GzJ5dr1ucg5AXu85giPn5sgHgPgvTWZMTrG4e9V0VXJAPjhqrmSJ3/Te/W6TUwBK2XPjrdEHRTw/q1ctWVI83eQMLq2w7EqsaxS3H3YwoGz01uspkzNYkgeyAt4RC4JaWFY90TA5wHiByQlsFF/ni+EHx+wigOQez5W9HRRfZFqMgIpzsjoxkDw85h997v6aP8w2R+XzTYvguoozhmpbJO+NOxbUsuhQbQt5RxD2XmKajEVp1vqFzz223l6Iz5rQRGq5ksZMqmD7IORlpkkIMF4AJD/6tT8/6hgwqToOZY9JTr+mbrsdab3CymlA/IwaG+/TNnQsW3Fm3RbQ/HjUHKBOPgJI+pOeS3phg1pb00ZRfRdCuTCredVrTjUqmlpriRaQf63i+kbfX6w/bFgKvdKt+z9NkzENNi3Jq4Byr7bmOrB0sZZr1GioeGr8pt9sVLoJKI6B+JWhps6hfuK7SjeNhBbEvOIVqr87Vzmhqjwz/gdlu0V+TLvCptGAsHxe6lFlsNoEqiUB5Pf9bf6khwTkBy3xG6nZ5J2JtdNolXiPNmxUeQHlaeWwcqjhm6+GtyLqVV+ssmR3WZJfsiaMK8ilJs+wGnul5XxVwjIQPz5MtpHXqsk0eYZzbop2iUZs9BNvApSbzbEAyIJH4n1px4g3qG23YXxFq/c2CZNz/Af5wBfRhrm8CwAAAABJRU5ErkJggg==" 
                alt="comments" /></button>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACdklEQVR4nO1ZwW7TQBBd/gr4AlpVtN5NVSQ4ZcZnz/gHEFL/ipZPadWmDYVyoXAjUtHYEcpuNvLa3k1slJF8aGTvvLfemfc8VWof+9h9TKA8Ncg/DNK9nhYnamTxQgM9GuTn6gL6M8n5nRpTGKBv/wiMkYSBQgvoUZPIkCYuCY28MMAf1BDCYHlkgC810m9rpxsuIeEWtgY+NMDXa/cC/6pyAB9GBk/nbUCvk6CvNgG6a36OPkUCXx71AV/XA8+tNYFnQc/lxUEEAvSlH3ipCzq21syLAw10FfDmLmIQeFpdNEN+6btPQ3nm60Tye2iu02nxyqmfnxEI2Lviv4eO+4Jvky8+AfdMdwS/SwLzGOB3R0COENJtXZh2wabI1ypWBUcAqsQu1ngI1DUmOOi29QZJy6vOOPAsA36T0sVq6WRr6ux0N0dTBudijVdHLLtxowbtYrGdKA7SxRqvKvNigvS+dQIpLoP8IIYsFXvtU/EYulJ1iZWFU/r7bMOb6LzzLvhdkNCdj02qVxoQpu7581rdOxzZTTu/zTfRObyuckxtzXhcZZOwiLyroYTxuMptS7ueFica+buodJaXb9sR8LjKJnPVOkkzhvsV83gXYcF49jZDzkQQxcRJy1SJ80VdUKZ0Vo8HekyZL+qCLvjl9TAKAl7w8jcUeksE7LGKjD76gt+k4iYvX8cfqwBfNgsaX7tTtGU7XASLInrX/dybQDWIDUs2s56r7HcP8MjP0T5hZdC6bQIa6WMU8NY8E+nCrYllS7xyd6v6EGrjq7CyJU9ybCIPD/7jf3qExKah76BcbLcPpAG52JAY9IAqNFK62H3sQ3WLv+Ik9IYUJKSfAAAAAElFTkSuQmCC" 
                alt= "something"/>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAB+klEQVR4nO1UPWsVURBdSSFiGhuJiIigRTBaGVHQSvzCItmZ3CYElJ15L5qQfTP7LNILEvIHEiVJG7ASTBviT7CxShrxA5s05kMxoDL77pqHuy++tyRg4cDAwpw959y5cycI/ken4bh+BlmfIel7JNkBkg9IMudIz2YYGI3PAeu8r+0YFlhm7d89yYFrt4F0A1l//plA+h1ZK8BS9d85DLJ8wUhutXSekQPJq7AS94+M1I+GUdyXnqhB8sOnYZ67ql5IMZW4H1mXMhGI6qdzAhmJkRcZQJbxXQEZL8Y0RIB0Jl+0npuDSC61bCHJpGWruiO97AXeFQl8s6IdOSgZbmysOxVg+VogIGu+h+fLCoSN+zKB1VwRWBa8wNOyAkAylXKQzOXVWa/4/m24UT3ZKfnAg+QUsGzaENhdFDtgedFwoMvOua52yQ0LrCt+ChdbAsOH9eNI+sn3cbZN/kP2Jvw7+ezuP+7ZE40s14Fk2/fyyd/Y7c68821XTa61ZSmk5GY2tkAyZS6LnCPJdLZGwkjuBZ3EECUu2znpWmi6k7Tnvi0pOctQUCYwSm7s7id96VSP3JmYONw0DFtYqd0tRf7bbVS7Cizr/iSvLf0QrFst2I8YpFqv7ZemtfwRKb4Y7GeEVTmBLG+A5a09quAgYvjR5DHLAyH/Z+MXFC4uWLBrcd4AAAAASUVORK5CYII=" 
                alt = "likes"/>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAABZklEQVR4nO2YsU7DMBCG7T7iXRdEy1Dfzt3EaGBiACaQKsGb9JGYoA9Q5ARB1CYRSyrH/j/ppETJ4Pt9Pv+2cwAAAAAAAJwbvxS9ZLm+SM+uMjwFfWWxQxNB32OMC1dl8lKXCL43+UpE8KPJFy6CJ9FtN1EK+tH33LyLbktqjP545knsjUXv/mbdbinYS4mV4PuST4mlpLsCtP8WJgIHfRoq7R4B+peK2LObKxRsP7SuBwQ4EYHEPt1cIbF7Fv1KlXDc1EYESHgWfWwEPP1WBjwuQPkwBDBUAGMJGHoAowkadgHGNmjwAa42GD7A4AMYPsDgAxg+wOr0AbTRdacHrFxtxPZidJVi1hef1RBjXKSyTZHjjE0+vqXY1e9N7UbXLjMmHx9n7twmHx9DAEMFMJaAoQcwmqBhF2Bsg7ZjsZusoh3TmXyAZB5TCEDd42vuMcXxOv4cXynoQ86B4zUAAAAAAHD/4hs3TUYQckMCHAAAAABJRU5ErkJggg==" 
                alt="upload"/>
              
                </div>
            </div>

        </div> 
    );
};

export default PostItem;