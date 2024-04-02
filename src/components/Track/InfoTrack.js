import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchASong } from "../../service/userService";

export default function InfoTrack() {
  const navigate = useNavigate();
  const goToArtist = () => {
    navigate("/artist");
  };

  const [song, setSong] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    //call api
    getSong();
  }, []);

  const getSong = async () => {
    let res = await fetchASong(`${id}`);
    if (res && res.data) {
      setSong(res.data);
    }
  };
  console.log(song);
  console.log(song.artist);

  const songName = song ? song.name : "Unknown";
  const artistName = song && song.artist ? song.artist.name : "Unknown";

  return (
    <div
      class="row"
      style={{
        marginTop: 30,
        marginLeft: 15,
      }}
    >
      <div class="col-sm-2">
        <img
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRUWFRUVGBgZEhISGBISERgREhgYGBgZGRgYGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHzQrJCs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAECAwUGB//EAD4QAAIBAgMFBAcFBwQDAAAAAAECAAMRBBIhBTFBYXEiUYGxBhMycpGhwRQzQlJiByNzgtHh8BWS0vEkY5P/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAmEQACAgICAQQDAQEBAAAAAAAAAQIRAzESIUEiMlFxBBOBYZEz/9oADAMBAAIRAxEAPwDzk4fS0p+yaEfCE4fFK3XuhE6KTPMc5wdMwmw1r/KE4ai2hmgaY7pNVESiVLO2qHAjxRTQ5hRRiYgYhjxo8UYhRo8UAGlbKTxIlsVohp0DLhyDcMeh1Ek1+R+UsdwBcxhUBipF8pPtmTj1ud1usD9WZtYygCp75iEEGZSVM78MlKNEqYN49S99eksormB5S+nSuGzbguhiottJ2Ps5ASZqKthaZ+zFup1sb3l32qxsQesuLpHJlTlJ0NtT2P5hA9m+38YZjzemSO9fOB7PPbH+cIn7kaYv/Fr7NeKPGM1OIjV9luh8oDsw6Hwh77j0Mztmt5SJbR04fZI0YoopRznO03Km4mnR2iLa75kRCYqTR6c8cZbNo42E0apMxaKX0+c1cOTbWaRbZyZccYroLBjiUZ5INKOdxLDFaQvETAVFt415VmihYcS28eVCTjsVErRWiBiEAGZQRYwJ8KQbg+E0LRWiasqM3HQIKlxbluMysZSIN+HfNurRB5HvgzpcEEa2PjIkrNsU0naM/C0iRpxNpoLSy6cGUjxg2zgfgT8YfX9kHuYH5wS6svJN86BNk7mHcbQtqIveB7M9pxzPmZpRx0Z5m1NgOPS1NrcvOA4A9peomnjx+7bp9Zl4L2l6iTL3I3wO8b/ptxo5EaanCMw0Mytn+0PhNYiZOC9odTIltHVh9kvo1Yo9opRznLiKIRTA9YIotCjirTODWjkwUmRLGnsMbFG80MK+YXmPTF/KbWAo2lRl2Y5oJR6CMsWSXBJMLNLOOgb1cQSFWjOIWIHyyQEYtGZ4xExHyynNHDGFhRNpHNGN5GA6J54nTMD8olpmD1cQyNa2m7xkyklsuEHJ+kH2XUGqnfmMOxq9hvDzmbgKOZ2tpYkzWxa9hukiMk7R0ZcfGSl8mXgPvHHXzmnlMycAbVjzv5TcIlRZGePqX0B44fu292Y+DPaHUTcxi9hvdMwMMe0OokzZr+MvQ0dCY1pIiK01s4aImY+FPb/mPnNkiY9DR/5z5yJPR04F1I14o94pRlRysUe0ac6PUFFFJIt4xE6IuQOc6XDIAAZg4eibgkTaobhrLicv5D0gwOJEvHp0zLhSl2YKLYN6yVtUhr4a8h9jhyQPEwEmMFMPGFAkggG4Q5B+trYEtI90sSl3wk37pHITDkHAgKYkrASy3OZuOpMxur25SXJ+C4wTdN0aFoBjKdzrKqWKdbX1tx75dUfOQRMsjtHVgjxl2BbNbLUcd4Gs0MU/ZYfpMzwAtew/La0Nr0GKneBYnwii0uy8sW3Xgy8CbVbnv85vkTn6WlT+ZZ0JmkXsw/IjplGMHYb3W8pzdDeOs6PHMMjDvUznKA1EU2V+NGkzpo0z/tJHw3cxGp7Q17UtTRhLBLYewmVh17bcmbzhlbFAbjM6g93NuLecmTNMEGrs1c3KKFfZz3RpPJmn6kcjeNJGRiNxCWU3ym8gJKFiD/tLMNAB0kFxTg9INRqZTNqnhlqKLWvGmS4ryi7AbRDaEWmujg7pzGMwpRrr3TS2ZjrgAnwjTMpQ8o2AIrSxNRpIsjcLR8iOLIWkSAIz0X75D7Ie8wtBUvgdqgEpauOEIXCDjJrh1HCFoThJ+TPIJk1wpMNay8CegvIpWB4Ee8LQ5MFiW2D/AGUaRPhF3gWPKFBgeI+MlaI0VnLNUviATpZgs36q9lvdPlOZxOlZj+udVlunVfpEkkXO2kzk6hIf4H5TpSQADynNVNH8BOnoLdF90eUFsJq4pgOMGZW0/CZz9LfOuq0RlbofKchS3wl2GFNdMPZdfC8DrtcidBhsKGQNxK/OYuPRlexHHTykKPk2crdFbvp4yWCPaB/UJVUVuMswQ7XivnGtCezpPXfqig2SKBJzIWPlk8seBdFYkhH3xAWMAogy2mlsqrZhrv032gRWTQWMVhxOtrYMOL8pmYDZ7h2NhbUWM2tlvmRTyhmWHIiipEsBLLRwI9oWLiQtFaStERCwogVkMssMoq4lV3kfGCYuJO0ZlgNLG9sgsMpAYcuFvl84ZTrq3sm/DlHYcRmpKeAlbUyNV/2nd4QkyBcQsKOKxhvUc97EzqsHrTT3B5Tlcb945G7MZ1WzPuk90QsqUbRzFcdsdBOnwZuie6PKc5jE7Y6fUzo9n/dp7ojb9Qkrgix9x6HynGLoZ2rjQ9JxX4j7x84mxwVM6fZRvTXxkcfhc4uN41i2Mex4mHExLQS6lZy2JoN38TeVYZbPbmvnOhx9EBWa3CYAsH07lgunRbqSs6T1cUln5R4zOjlSshllpEklEte3AXk2bUDqsmVk2W0YCACZLSXqzpzkxTJK6cbTSx9CxS3eIWOjW2EpCWPfNMwHZXskQ8zOyWiKiPaIR4WKhjBsSXtZLX7zuhUhVw7OlUKyqy0atQFjb2EJsOcdhRy+1NuMAUUjNchnXcOS8+c55nJ1Jue86mMY03SohivDMDtB6R7J0vqp1B/oYFFG0B6Dhq6uqsuoIvJMo7pg+i+LADU2PHOvkw8vjOhteYvpl0cVjhZr97P5zd2dVYU0ta1jr4zH2lv6VH85t7JohqS35+ZlJ12xSTejHxe9T73nNrAV1FNATwmVtFLZQODuvzmrs0LkUka6+cTabsFFqKQ9fEi3ZBPhOVI7R94+c7JnHAfKcliF7b++3nKvoUU0zV2az5bJ36zQpo+8nwg2wj2W6iahElSpUOULdgmNW6OP0mc1+LwE66olwRyM5Fx2vjBO2NKkdDnigPrY8VMrozMskCRJlYxEB0VmXJT0uZAiMxgBqUcYgVRlu2YHXSGVMZTdx2TfQ8pzhhGEqKGubmHELOmpY5F3D5yz/Ul7vnAsNTzqGFJyDuIpsQbaaG2s6TYvoy+IQvlRAGK2qKyubAagZd2sf6/LMJZop0Yw2iO6I7SHKdWPQhvz0x4MfpMPF7Dro7ouHdwptnpoxQ6A6G3OHBeGQvyFdNMz/wDUeQmdtrajerKqB27oTyI1+V4Xjab02yOhRrA5XWxsdx6TJ2kbrcgaG8mqkdCalG0c+RHCS2qwLE2tc7ownQZN/BWUkSDCAIssBKRbsnDh6iqWK3vYra9wL8Z21Bcoy66WAJ1NpxeCBDqwIBXXU6GdbhK+c3/SJjPZtFdHMbXHab+I03dgn90OrecxNsrq/wDEPlNf0eb91/MZL0PyA7U3n+I81dkgerHU+czNsDtH37/ETQ2O49WOp84mG0aFpxVT23P628zOvNdbkX17pxtc6tzc+ZlREbvo+2jCbE5nYuIyFuOk0/8AUuUFFvQpTjHZpGcg57Z6t5mbjbQ0mFl7XiZSi47FGSloJzRSvWKMosIjES0rIkTKzQqIjg98kRIGMRF0XeCekgBJ2iexlJiZ3Ho76enD0EovRzhAVVw+XQkmxB6zWX9pFyf/ABx/9P7TzC0Jwwse8mNtfBz/AKI35PRT+0R+GHXxqn/jIN+0OrwoIOtRj9JxnqWjmk3dFyXwhr8eP+/9NHbe1nxTh3VVIXIAvdcnees53aznsrpxJF/h9ZXicYxJCkgd43mB3lKLu2NNRXFIhaKPEZoTY14g0YxQAcOeE6HYWOLEo5F7dkk6nlzM50SQkyjaGpUzS2z+L+J9IX6PVbI3vfQTHZyylSedzqbzU9Hjo6nvBmclSNFJSfRHHPmzH/2fSNQZgul9/CWY9dG95fKX7MPZI03xRdOypR5RoFYOde11tMjEb/nOrqg5Tu3GcrW3joJblZnHHxT7L8A1mHPSbGzaVFqqiuzrTuczU7F9xta4PG3CYlIWIMtxNQ30PCEXtfITjdP4Op2zh8AFX7M9Ytmu7VbFcttwGUa3t8Jy+JpEFWDXDM1vA2hmzihUg3PffWUY4jMttwbQdbSVa6u/svikrSopyx5ZpFKJCSJBpawlZExNisiRYSwyJjTAqMgZaRIkSkSQAuQOJIA8Z1ewfRPEV1zp6sDg71QO8HRQx3i26cm0spYl09h3Xh2KjL5GUjOak+kzZxbPTqPTdxdGKEo2ZbjfY8RAcRtBmDAHS1uev+GZ7OTxiU6dT5f9w2xpcUQIkDLJFhNDNkLxoSmH7QB7r6RiAqqbA3Ot9ZPNeB8H5Booa1MLmIA0AIvuF5FFvkYgXLEHTfa/9Iufkv8AX4BIgYU4BD6Ds3IIHX+kZqA77dlT8bw5ryS8b8FEtTEugJU2vvlZFjaNbfKdMzVxZoUqpdGJ/MJfhKmQjxEF2aew/vDyEljUOUkcNZi/dR1J+mwnF7WGqgXO7lMR98gN8ty6zTilozTbLU3SVZNAY9NYUlAuAoBJJAAAuSeQ4xJdhJpRYPh8RkFudzFiqwYhh+YfSPiMKykqylSDYqwKkHuIO6VsNB1luPkzjktUW5opOKMXJBzCVsJcwlRE5jqKyJWZcZB1gBUY9Olm42kpEG0pCY1XD21BuO+DsIQzm1pTkl2TRCTbcBy1+J/tCdnYBqz5EZFOVmvUbKthwvY6ynEJZj87br8QIKSugkurKSJErJxpdmVFpq2Ka6ZdQOkgrnsjKDckrfSWZVAPNbfK8Y1V036EEeRmX0jX7ZEM9zcXuNRe2kYu2llsFubXv85L1oJuQdQRfLccpEOtvaHH8JB8IfwP6ReqLNZSM28k3li1ASbb8iix0vYymi9g3S467peqDiN1rHd+EkwdLoE2wcjU6W5d0heSfQ/A/GRM1WjGWw/Z69l+oMuxOot3giRwB7J936y3EaBfeEwb9R0R9pgrvHWWupB+cTpZyP1f3kmvmM2fZloJwx1E6r9n9RVxlLMRo5Av3sCgtzuwnKYfeOs3/RfZ1arXc0HRGpsnadsurtlWwAN9d/IRKmmiMt0mXftCAGOxHvofiiH6znHpEKSfy5vC4H1mn6W4qpUxVZqqhamYI6r7IZFVNP8AbfxgJNke+t0ya8ip+ktukkZ4oum0NliluYRQsdBrSlhLmEracx2EMmhNxobW4ypzLCZW8EBUxiNNu4x2nQDFYb7OEJOe2a+X8fXu4TRJVdNmOSUk6TS68nOMpG8QrB1FCurIjl1AVm3oddV56j4RFcx3X6SQpAXvcaaDd8ZD7NYlVPCAnW28ecFc3YnvJMLpHtDrf4awS0uNkypkWEiRJERrS0Qy5qVgezfT2ryOJXsp7v8ASWesVb2LHS1idJD1ykAMt7C2+0yXK7NHxqiSmyL2sup1tfv0kaWqsbqTm9oiw4RvXC1sgtckA62lQrAAjKLE3sNP83R8WHKKJBNGJVSQw0Xw3RzSIJCk3FrA6ixkBWsCFFr243sY+HqENqdSN5+Ubi9kqStIqq3ub2vy3SKyZ3mVzRaMns0dm/iH6frLMd7F+4qfgYJgnsw8R8RD8UmZbd4mMupG8O4mbWW9RT3qG+Uqf2zCEF1Vu5WX4SgJY336CaJ9Ey2Tptadv+zi32ms3EYcOBzDqfoP7TiEE6D0Tx70MTTKFe21Ok2YX7Duua2uh03xWTkTlGkF+ntSk+LarSYMr06bkrqM+ULbr2Rec9iNAV/KAD1OpnVenGzko4xwoAQhK4UCwF11A/mBPjOPRswc8SST43tDf8FDqKXyPkMUr9YYoFUbzJKXUjeJa0ZxdR8JijUopgXF4sRSAOm7rHyG+43lmZdz7+LBcxGmml++UJ9AZXmJNKV9xXTWxjjDnvhGHwxBvf5QtAMh4rddLXG6M4JOrE9RPSNjeh9P1OfEZ1YqGKpl7ItfuNzLKvoXQZEKObErZ3sNCO4f1krIrqiG1uzyxaRDH3ah+CMYOUnb+kOx6eGzgOGujKCB+J1ZQN+8b+k415onYk7BSIiJMrGaWJlJEYyy0TLKsn6K7xnEnljQF9ldpICORFkMYhiJQQYRaILACugdZqo90HIi8yVFm+c2cPT7BtxBmeSqNsV2wOuLBxwPaHjvg4bQdBDXQsMp04fKCPRNgeHsyYsqS7JruhNKoEZG10IOhsdDfQ8OsEEuOqaDjvhY6s6T0y24uMqLURGRfVCmFcgubMxJNtLXbTpOXw+iteEipmAJOostpZ6oHW/CTypUCx1oys0UjaKUTTOtyi9rgdYVs6jTYkVHZBY5WVcwzcL8t8FTEEjpy0kBUPHvmdltWgvbVSiHU0kZRlsys5db96nfbrBXx2dKaslMCmGUOiBaj3/OfxH+8Fx73Ohvzgxc2tw7uEaJrpINXBuVL56YA1yl+18LSdKqQBx433CZzG5vu5CIdTFRVnpWx9uvZlOIpsWop982Qq5uAiWBzb93IdJbs7bGIFKnTODqVMoKvnZaaHXssrWN/wDNZw+y9oCluQNqD2+1qNxtOxw3pWwS4UFu4iw841E5st/BzfpjUqGqpej6kFLrTD510JBa9hcnTgJzV/qZvelG3HxOUuqgoTlK77N7Q5+yvwmBTF79JprocL43VFdoxWWBCDHI8JTEmUBBEyS20QSAWUhRHyywrykSpjC6KysiTyl6rFk/y0YbBWjQgpylbpYxkf6UVN4mrgqmgv3CZm9vlC6eYDUTKfaN8aadl+PdSRl0FpCoV9WLby17SmvvHTzluJoEIG04cZn8GoIDNjYIUsVbcRMW8O2dUKsI5LoF0ENRCVXQ7jfLpuO8QrDYVWVjpcC46Ef9yjaq3ytfXd9RB8PiCLa8Ctv86yWrGmZ2WKWXMUuhG9RkcRFFIABbdIRRRgKOsaKNCZfTmkvs+EUUaM5mfit3iJXwiijK8DiRMUUozGaPFFGJDCRaNFATGSTXdFFAEKUtx8IooDKMF94Oph+J3+MUUiRvDQHX+kKxH3S+EUUgYDLsL7QjxRsA3aO5fCZyfUxRRICMUUUoD//Z"
          alt=""
          style={{
            border: 1,
            borderRadius: 5,
            cursor: "pointer",
          }}
        />
      </div>
      <div class="col-sm-10">
        <div class="row" style={{ color: "white", marginTop: 70 }}>
          <span style={{ height: 20, fontSize: 14 }}>Bài hát</span>

          <h1 style={{ fontSize: 80, fontWeight: 900 }}>{songName}</h1>

          <span>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGMq3pybPrpnAHN0GgdBgNt4qLyuvE199C1Q&usqp=CAU"
              alt=""
              style={{
                height: 28,
                width: 28,
                border: 1,
                borderRadius: "50%",
                marginRight: 5,
              }}
            />
            <span onClick={goToArtist} style={{ cursor: "pointer" }}>
              {artistName}
            </span>{" "}
            • <span>{songName}</span> • <span>2023</span> • <span>2:41 </span> •{" "}
            <span>12.641.154</span>
          </span>
        </div>
      </div>
    </div>
  );
}
