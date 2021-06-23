function starOutGrid(grid) {
    let row = []
    let col = []
    for(i=0;i<grid.length;i++)
    {
        for(j=0;j<grid[i].length;j++)
        {
            if(grid[i][j] == '*')
            {
                row.push(i)
                col.push(j)
            }
        }
    }
    for(ri = 0; ri<row.length; ri++)
    {
        star_row = row[ri]
        for(i=0;i<grid[0].length;i++)
        {
            grid[star_row][i] = '*'
        }
    }
    for(ci = 0; ci<col.length; ci++)
    {
        star_col = col[ci]
        for(i=0;i<grid.length;i++)
        {
            grid[i][star_col] = '*'
        }
    }

    return grid
}
