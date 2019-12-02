/*created by HLY*/  
function getPosTop(i,j){
  return 20+i*120;
}
function getPosLeft(i,j){
  return 20+i*120;
}
function getNumberBackgroundColor(number){
    switch(number){
        case 2:return"#eee4da";break;
        case 4:return "#ede0c8";break;
        case 8:return "#f2b179";break;
        case 16:return "#f59563";break;
        case 32:return "#f67c5f";break;
        case 64:return "#f65e3b";break;
        case 128:return "#edcf72";break;
        case 256:return "#edcc61";break;
        case 512:return "#9c0";break;
        case 1024:return "#33b5e5";break;
        case 2048:return "#09c";break;
        case 4096:return "#a6c";break;
        case 8192:return "#93c";break;
    }
    return "black";
}
function getNumberColor(number){
    if (number<=4)
    return"#776e65";
    return"white";
}

function getNumberText(number){
    switch(number){
        case 2:return "洋";break;
        case 4:return "洋儿";break;
        case 8:return "洋洋";break;
        case 16:return "洋子";break;
        case 32:return "黄辉";break;
        case 64:return "固始鹿晗";break;
        case 128:return "大猪蹄子";break;
        case 256:return "练习";break;
        case 512:return "两年半";break;
        case 1024:return "鸡你太美";break;
        case 2048:return "警告";break;
        case 4096:return "游戏";break;
        case 8192:return "结束";break;
    }
    return "black";
}
function nospace(board){
     for(var i=0;i<4;i++)
       for(var j=0;j<4;j++)
          if(board[i][j]==0)
             return false;

     return true;
     }
       
     function canMoveLeft( board ){

        for( var i = 0 ; i < 4 ; i ++ )
            for( var j = 1; j < 4 ; j ++ )
                if( board[i][j] != 0 )
                    if( board[i][j-1] == 0 || board[i][j-1] == board[i][j] )
                        return true;
    
        return false;
    }
    function canMoveUp( board ){

        for( var j = 0 ; j < 4 ; j ++ )
            for( var i = 1 ; i < 4 ; i ++ )
                if( board[i][j] != 0 )
                    if( board[i-1][j] == 0 || board[i-1][j] == board[i][j] )
                        return true;
    
        return false;
    }
    function canMoveRight( board ){

        for( var i = 0 ; i < 4 ; i ++ )
            for( var j = 2; j >= 0 ; j -- )
                if( board[i][j] != 0 )
                    if( board[i][j+1] == 0 || board[i][j+1] == board[i][j] )
                        return true;
    
        return false;
    }
    function canMoveDown( board ){

        for( var j = 0 ; j < 4 ; j ++ )
            for( var i = 2 ; i >= 0 ; i -- )
                if( board[i][j] != 0 )
                    if( board[i+1][j] == 0 || board[i+1][j] == board[i][j] )
                        return true;
    
        return false;
    }

function noBlockHorizontal(row1,col1,col2,board){
    for(var i=col+1;i<col2;i++)
     if(board[row][i] !=0 )
      return false;
      return true;
  }

 function noBlockVertical(col1,row1,row2,board){
    for( var i = row1 + 1 ; i < row2 ; i ++ )
    if( board[i][col] != 0 )
        return false;
     return true;
 }
function nomove(){
    if(canMoveLeft(board)|| canMoveUp(board) || canMoveRight(board) || canMoveDown(board))
    return false;

    return true;
}
