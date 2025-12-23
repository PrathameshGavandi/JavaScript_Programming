function CheckPerfect(no)
{
    let iCnt = 0;
    let iSum = 0;

    for(iCnt = 1; iCnt <= no/2; iCnt++)
    {
        if((no % iCnt) == 0)
        {
            iSum = iSum + iCnt;
        }
    }

    if(iSum == no)
    {
        return true;
    }
    else
    {
        return false;
    }
}

function main()
{
    let bRet = false;
    let iValue = 20;
    bRet = CheckPerfect(iValue);

    if(bRet == true)
    {
        console.log(`${iValue} is perfect number`);
    }
    else
    {
        console.log(`${iValue} is not perfect number`);
    }
   
}

main();