/*level 1*/
do {
  north();
} while ( isFree('north') );

/*level 2*/
while ( isFree('east') ) {
  east();
};

/*level 3*/
for (let i; i !== 'next';) {
    i = south();
    i = east();
}
/*level 4*/
for (let i; i !== 'next';) {
    while ( isFree('east') ) {
        i = east();
    }
    while ( isFree('south') ) {
        i = south();
    }
}

/*level 5*/
for (let i; i !== 'next';) {
    while ( isFree('east') ) {
        i = east();
    };
    while ( isFree('south') ) {
        i = south();
    };
    while ( isFree('west') ) {
        i = west();
    };
    while ( isFree('south') ) {
        i = south();
    };
    while ( isFree('west') ) {
        i = west();
    };
    while ( isFree('north') ) {
        i = north();
    };
    while ( isFree('west') ) {
        i = west();
    };
    while ( isFree('south') ) {
        i = south();
    };
    while ( isFree('east') ) {
        i = east();
    };
}

/*for (let i = 0; i < 5; i++ ) {
    if ( isFree('east') &&  isFree('south') ) {
        while ( isFree('south') ) {
            south();
        }
    } else if ( isFree('south') &&  isFree('west') ) {
        while ( isFree('west') ) {
            west();
        }
    } else if ( isFree('east') ) {
        while ( isFree('east') ) {
            east();
        }
    } else if ( isFree('south') ) {
        while ( isFree('south') ) {
            south();
        }
    } else if ( isFree('west') ) {
        while ( isFree('west') ) {
            west();
        }
    } else if ( isFree('north') ) {
        while (isFree('north')) {
            north();
        }
        ;
    }
}



while (true) {
    if ( isFree('east') ) {
        east();
    } else if ( isFree('south') ) {
        south();
    } else if ( isFree('west') ) {
        west();
    } else {
        north();
    }
};


let i;
while (i !== 'next') {
    if ( isFree('east') ) {
       i = east();
    } else if ( isFree('south') ) {
        i = south();
    } else if ( isFree('west') ) {
        i = west();
    } else {
        i = north();
    }
};

for (let i; i !== 'next';) {
    i = north();
}

for (let i = true; i === true;) {
    i = north();
}

for (let i; i !== 'next';) {
    if ( isFree('north') ) {
        alert ('north');
    }
    else if ( isFree('east') ) {
        i = east();
    }
}

/*next*/
for (let i; i !== 'next';) {
    if ( isFree('east') ) {
        i = east();
    } else if ( isFree('south') ) {
        i = south();
    } else if ( isFree('west') ) {
        i = west();
    } else {
        i = north();
    }
}

/*next2*/
for (let i; i !== 'next';) {
    while ( isFree('east') ) {
        i = east();
    };
    while ( isFree('south') ) {
        i = south();
    };
    while ( isFree('west') ) {
        i = west();
    };
    while ( isFree('north') ) {
        i = north();
    };
}

/*21*/
let east = isFree('east');
for (let i = true; i !== 'next';) {
    if ( isFree('east') ) {
        while ( isFree('east') ) {
            i = east();
        }
        east = false;
    }
    else if ( isFree('west') ) {
        while ( isFree('west') ) {
            i = west();
        }
    }
    else if ( isFree('south') ) {
        while ( isFree('south') ) {
            i = south();
        }
    }
    else if ( isFree('north') ){
        while ( isFree('north') ) {
            i = north();
        }

    }
}

/*22*/
let east = isFree('east');
let west = isFree('west');
let south = isFree('south');
let north = isFree('north');

for (; i !== 'next';) {
    if ( east ) {
        while ( east ) {
            east();
        }
        east = false;
    }
    else if ( isFree('west') ) {
        while ( isFree('west') ) {
            i = west();
        }
    }
    else if ( isFree('south') ) {
        while ( isFree('south') ) {
            i = south();
        }
    }
    else if ( isFree('north') ){
        while ( isFree('north') ) {
            i = north();
        }

    }
}
/*
for (let i = true; i !== 'next';) {
        while ( i === true ) {
            i = east();
        }
        while ( i === true  ) {
            i = west();
        }
        while ( i === true  ) {
            i = south();
        }
        while ( i === true  ) {
            i = north();
        }
    }*/
